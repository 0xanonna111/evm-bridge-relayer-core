const { ethers } = require('ethers');
const { RELAYER_PK } = require('./config');

// Creates a wallet instance from the private key
const wallet = new ethers.Wallet(RELAYER_PK);

async function signMessage(user, amount, nonce) {
    // We strictly pack the data to match Solidity's keccak256
    const messageHash = ethers.utils.solidityKeccak256(
        ["address", "uint256", "uint256"],
        [user, amount, nonce]
    );

    // Sign the binary hash
    const signature = await wallet.signMessage(ethers.utils.arrayify(messageHash));
    return signature;
}

module.exports = { signMessage };
