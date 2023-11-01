import { Inter } from "next/font/google";
import "./globals.css";
import BackButton from "@/components/atoms/backbutton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "D-Crypto",
  description: "Web3 service Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackButton />
      </body>
    </html>
  );
}
