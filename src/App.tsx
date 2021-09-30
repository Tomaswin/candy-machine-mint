import "./App.css";
import { useMemo } from "react";

import Home from "./Home";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import MintSection from "./components/MintSection";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <div className="App">
            <Navbar />
            <Section
              title="Section 1"
              subtitle="asdmasldasojdkasop jsopa jdasopj doasadsada  awd askd njweok njfweoqinfoiewnfoiewnfi ewno fneownfewnfoiewniofenoifneinfoiewnofenwofneonfonosj dasj dopsaj saopjopasj osa joisajdopasjdopsaj ops[a joas jeowr joie joiep jfoeijneofjo"
              dark={true}
              id="section1"
            />
            <Section
              title="Section 2"
              subtitle=""
              dark={false}
              id="section2"
            />
            <MintSection
              title="Section 3"
              subtitle="Mint section"
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout}
              id="section3"
            />
            <Section
              title="Section 4"
              subtitle=""
              dark={false}
              id="section4"
            />
            <Section
              title="Section 5"
              subtitle=""
              dark={true}
              id="section5"
            />
          </div>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
