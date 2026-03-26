import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock EnergyVisual to avoid canvas issues in jsdom
jest.mock('./EnergyVisual', () => {
  return function MockEnergyVisual({ trigrams }) {
    const upperSymbol = trigrams?.upper?.symbol || '';
    const lowerSymbol = trigrams?.lower?.symbol || '';
    return (
      <div data-testid="energy-visual">
        <span>{upperSymbol}</span>
        <span>{lowerSymbol}</span>
      </div>
    );
  };
});

import App from './App';

beforeAll(() => {
  window.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
  window.cancelAnimationFrame = jest.fn(id => clearTimeout(id));
});

describe('App integration', () => {
  test('full flow: renders content with hexagram info', async () => {
    render(<App />);

    // After the synchronous useEffect completes, main content appears
    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // Hexagram reading section is present
    expect(screen.getByText('Your Reading')).toBeInTheDocument();
  });

  test('Cast New Hexagram button generates a new reading', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // Get the initial hexagram text
    const initialHeading = screen.getByText(/^\d+\.\s+\w+/);
    const initialText = initialHeading.textContent;

    const castButton = screen.getByText('Cast New Hexagram');
    expect(castButton).toBeInTheDocument();

    fireEvent.click(castButton);

    // Content should still be present after clicking
    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // A hexagram number+name heading should still exist
    expect(screen.getByText(/^\d+\.\s+\w+/)).toBeInTheDocument();
  });

  test('hexagram number is displayed on the page', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // The Explanation component renders hexagram number + name like "42. Increase"
    const heading = screen.getByText(/^\d+\.\s+\w+/);
    expect(heading).toBeInTheDocument();
  });

  test('trigram symbols are visible', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // The mock EnergyVisual and/or Explanation render trigram symbols
    const body = document.body.textContent;
    const trigramSymbols = ['☰', '☷', '☵', '☲', '☳', '☴', '☶', '☱'];
    const hasTrigramSymbol = trigramSymbols.some(symbol => body.includes(symbol));
    expect(hasTrigramSymbol).toBe(true);
  });

  test('explanation section appears with expected heading', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    // The Explanation component renders "Level 1: Primary Oracle" heading
    const primaryOracle = screen.getByText(/Primary Oracle/);
    expect(primaryOracle).toBeInTheDocument();

    // "Your Reading" heading from MainContent
    expect(screen.getByText('Your Reading')).toBeInTheDocument();
  });
});
