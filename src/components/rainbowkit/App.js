import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { YourApp } from "./YourApp";
import { http } from "@wagmi/core";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "3fbb6bba6f1de962d911bb5b5c9dba88",
  chains: [mainnet, sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
  transports: {
    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/..."),
    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/..."),
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <YourApp />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
