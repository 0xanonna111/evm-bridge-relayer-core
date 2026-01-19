require('dotenv').config();

module.exports = {
    SOURCE_RPC: process.env.SOURCE_RPC_URL,
    SOURCE_CONTRACT: process.env.SOURCE_BRIDGE_ADDRESS,
    
    DEST_RPC: process.env.DEST_RPC_URL,
    DEST_CONTRACT: process.env.DEST_BRIDGE_ADDRESS,
    
    RELAYER_PK: process.env.RELAYER_PRIVATE_KEY
};
