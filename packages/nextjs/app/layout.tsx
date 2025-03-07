"use client";

import { SideBar } from "./SideBar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });
const graphqlEndpoint = "https://api.studio.thegraph.com/query/105777/gapless/version/latest";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  return (
    <html suppressHydrationWarning>
      <body>
        <ApolloProvider client={client}>
          <ThemeProvider enableSystem>
            <ScaffoldEthAppWithProviders>
              <SideBar>
                <div className="flex flex-1">
                  <div className="p-2 md:p-4 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                    {children}
                  </div>
                </div>
              </SideBar>
            </ScaffoldEthAppWithProviders>
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
