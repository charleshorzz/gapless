import { SideBar } from "./SideBar";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            <SideBar>
              <div className="absolute top-4 right-4 flex items-center space-x-4">
                <SwitchTheme />
                <RainbowKitCustomConnectButton />
              </div>
              <div className="flex flex-1">
                <div className="p-2 md:p-4 rounded-tl-2xl border-b-0 border-neutral-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                  {children}
                </div>
              </div>
            </SideBar>
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
