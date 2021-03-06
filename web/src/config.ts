import {PublicKey} from "@solana/web3.js";

const BRIDGE_ADDRESS = "0x5b1869D9A4C187F2EAa108f3062412ecf0526b24";
const WRAPPED_MASTER = "e78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab"


const SOLANA_BRIDGE_PROGRAM = new PublicKey("Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o");
const TOKEN_PROGRAM = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

const SOLANA_HOST = "http://localhost:8899";

export {
    BRIDGE_ADDRESS,
    TOKEN_PROGRAM,
    WRAPPED_MASTER,
    SOLANA_BRIDGE_PROGRAM,
    SOLANA_HOST
}
