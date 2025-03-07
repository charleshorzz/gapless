import ScaffoldEthApp from "./ScaffoldEthApp";

export const metadata = {
  title: "Scaffold-ETH 2 App",
  description: "Built with 🏗 Scaffold-ETH 2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </body>
    </html>
  );
}
