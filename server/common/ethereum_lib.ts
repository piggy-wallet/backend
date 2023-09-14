import { Wallet } from "ethers";

const createWallet = () => Wallet.createRandom();

export default { createWallet };
