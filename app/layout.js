import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Deko Elektrik",
  description: "Deko Elektrik - Elektrik Malzemeleri ve Çözümleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
