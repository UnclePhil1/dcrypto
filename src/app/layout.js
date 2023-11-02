import "./globals.css";
import BackButton from "@/components/atoms/backbutton";


export const metadata = {
  title: "D'Crypto",
  description: "Web3 service Community",
  icons: {icon: "../favicon.jpg"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackButton />
      </body>
    </html>
  );
}
