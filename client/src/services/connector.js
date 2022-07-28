import { InjectedConnector } from "@web3-react/injected-connector";

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

export default MetaMask;
