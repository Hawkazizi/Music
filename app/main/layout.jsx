import { Inter } from "next/font/google";
import MainPage from "@/components/MainPage";
import TabBar from "./TabBar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-foam-950">
      <body className={inter.className}>
        {/* TabBar */}
        <TabBar />
        {/* Search Bar */}
        <MainPage />

        {/* page.jsx */}
        {children}
      </body>
    </html>
  );
}
