import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('./EnergyVisual', () => {
  return function MockEnergyVisual() {
    return <div data-testid="energy-visual">EnergyVisual</div>;
  };
});

import App from './App';

describe('App', () => {
  test('renders main content after initialization', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    expect(screen.getByText('Your Reading')).toBeInTheDocument();
  });

  test('renders hexagram with Primary Oracle heading', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Level 1: Primary Oracle/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Primary Judgment/i)).toBeInTheDocument();
  });

  test('Cast New Hexagram button generates a new reading', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Cast New Hexagram')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Cast New Hexagram'));

    await waitFor(() => {
      expect(screen.getByText('I Ching Oracle')).toBeInTheDocument();
    });

    expect(screen.getByText(/Primary Judgment/i)).toBeInTheDocument();
  });

  test('displays hexagram number and name', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/^\d+\.\s+/)).toBeInTheDocument();
    });
  });

  test('renders About the I Ching section', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('About the I Ching')).toBeInTheDocument();
    });

    expect(screen.getByText(/History/)).toBeInTheDocument();
    expect(screen.getByText(/Philosophy/)).toBeInTheDocument();
    expect(screen.getByText(/How to Use/)).toBeInTheDocument();
  });

  test('EnergyVisual component is rendered', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId('energy-visual')).toBeInTheDocument();
    });
  });

  test('displays hexagram keywords', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Keywords:/)).toBeInTheDocument();
    });
  });
});
