const { ethers } = require('ethers');
const { SOURCE_RPC, SOURCE_CONTRACT } = require('./config');
const bridgeAbi = require('./bridge_abi.json');
const { processDeposit } = require('./dispatcher');
const { logInfo } = require('./logger');

async function startWatcher() {
    const provider = new ethers.providers.JsonRpcProvider(SOURCE_RPC);
    const sourceContract = new ethers.Contract(SOURCE_CONTRACT, bridgeAbi, provider);

    logInfo('WATCHER', `Listening for events on: ${SOURCE_CONTRACT}`);

    // Listen for 'Deposit' event: event Deposit(address indexed user, uint256 amount, uint256 nonce);
    sourceContract.on("Deposit", async (user, amount, nonce, event) => {
        logInfo('EVENT', `Deposit Detected! User: ${user} | Amount: ${ethers.utils.formatEther(amount)} ETH`);
        
        // Trigger the relay logic
        await processDeposit(user, amount, nonce, event.transactionHash);
    });
}

module.exports = { startWatcher };
