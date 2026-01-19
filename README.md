# EVM Bridge Relayer Core 🌉

![Architecture](https://img.shields.io/badge/Architecture-Event%20Driven-blueviolet) ![Ethers](https://img.shields.io/badge/Library-Ethers.js-blue) ![Security](https://img.shields.io/badge/Security-ECDSA%20Signing-green)

## Node Overview

The **EVM Bridge Relayer Core** is the backend infrastructure required to run a decentralized bridge between Layer 1 (Ethereum) and Layer 2 (Optimism/Arbitrum/Polygon).

It acts as a "Validator Node" that:
1.  **Monitors** the Source Chain for locked assets.
2.  **Generates** a cryptographic signature proving the deposit.
3.  **Relays** the transaction to the Destination Chain to mint/release the wrapped tokens.

### Workflow
1.  User deposits ETH on Ethereum Mainnet (Source).
2.  `watcher.js` detects the `Deposit` event.
3.  `signer.js` creates a signed payload (Proof of Authority).
4.  `dispatcher.js` submits the mint transaction to Polygon (Destination).

### Prerequisites
* Node.js v16+
* RPC Endpoints for Source and Destination Chains
* Relayer Wallet with gas funds on the Destination Chain

### Setup

1.  **Clone & Install**
    ```bash
    git clone [https://github.com/your-repo/evm-bridge-relayer-core.git](https://github.com/your-repo/evm-bridge-relayer-core.git)
    npm install
    ```

2.  **Configuration**
    Update `.env` with your Private Key and RPC URLs.

3.  **Run Node**
    ```bash
    node index.js
    ```

## Security Note
This relayer uses a hot wallet for signing. In production, this should be connected to a secure HSM (Hardware Security Module) or MPC (Multi-Party Computation) service.

---
*Interoperability Layer for the Decentralized Web.*
