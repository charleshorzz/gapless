"use client";

import { SideBar } from "./SideBar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import "~~/styles/globals.css";

const graphqlEndpoint = "https://api.studio.thegraph.com/query/105777/gaplessv9/v0.0.1";

const client = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider enableSystem>
        <ScaffoldEthAppWithProviders>
          <SideBar>
            {/* Main Content */}
            <div className="flex flex-1">
              <div className="p-2 md:p-4 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                {children}
              </div>
            </div>
          </SideBar>
        </ScaffoldEthAppWithProviders>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default ScaffoldEthApp;
