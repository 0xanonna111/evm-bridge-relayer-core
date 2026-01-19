const { ethers } = require('ethers');
const { DEST_RPC, DEST_CONTRACT, RELAYER_PK } = require('./config');
const bridgeAbi = require('./bridge_abi.json');
const { logInfo } = require('./logger');

async function executeRelease(user, amount, nonce, signature) {
    const provider = new ethers.providers.JsonRpcProvider(DEST_RPC);
    const wallet = new ethers.Wallet(RELAYER_PK, provider);
    const destContract = new ethers.Contract(DEST_CONTRACT, bridgeAbi, wallet);

    logInfo('EXECUTOR', 'Submitting transaction to Destination Chain...');

    // Call the 'release' function on the destination smart contract
    // function release(address user, uint256 amount, uint256 nonce, bytes memory signature)
    const tx = await destContract.release(user, amount, nonce, signature, {
        gasLimit: 300000 // Hardcoded for safety
    });

    await tx.wait();
    return tx;
}

module.exports = { executeRelease };
