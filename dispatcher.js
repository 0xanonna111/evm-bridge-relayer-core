const { signMessage } = require('./signer');
const { executeRelease } = require('./executor');
const { logSuccess, logError } = require('./logger');

async function processDeposit(user, amount, nonce, txHash) {
    try {
        logSuccess('PROCESS', `Processing Tx: ${txHash}`);

        // Step 1: Sign the data (Proof of Validator)
        const signature = await signMessage(user, amount, nonce);
        
        // Step 2: Submit to Destination Chain
        const tx = await executeRelease(user, amount, nonce, signature);
        
        if (tx) {
            logSuccess('RELAY', `Bridge Complete! Dest Tx: ${tx.hash}`);
        }
    } catch (err) {
        logError('FAIL', `Relay Failed: ${err.message}`);
    }
}

module.exports = { processDeposit };
