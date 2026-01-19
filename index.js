require('dotenv').config();
const { startWatcher } = require('./watcher');
const { logSystem } = require('./logger');

async function initNode() {
    console.clear();
    logSystem('CORE', 'Starting Bridge Relayer Node...');
    logSystem('CORE', 'Initializing Cryptography Module...');
    
    try {
        // Initialize the event listener loop
        await startWatcher();
    } catch (error) {
        console.error("Fatal Error:", error);
        process.exit(1);
    }
}

initNode();
