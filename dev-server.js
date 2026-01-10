#!/usr/bin/env node


// Start the React development server
const { spawn } = require('child_process');

const server = spawn('npm', ['start'], {
    stdio: 'inherit',
    shell: true
});

server.on('error', (error) => {
});

server.on('close', (code) => {
    if (code !== 0) {
    }
});