import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.dekoelektrik.com.tr"),
  title: {
    default: "Deko Elektrik - Elektrik Malzemeleri ve Çözümleri",
    template: `%s | Deko Elektrik`,
  },
  description:
    "Deko Elektrik, geniş ürün yelpazesi ile elektrik malzemeleri, anahtar priz, sigorta kutuları, kablo ve aydınlatma ürünleri sunar. Projeleriniz için güvenilir ve kaliteli çözümler.",
  keywords: [
    "Deko Elektrik",
    "elektrik malzemeleri",
    "anahtar priz",
    "sigorta kutusu",
    "kablo",
    "aydınlatma",
    "şalt malzemeleri",
    "otomasyon ürünleri",
    "elektrikçilik",
    "elektrik tesisatı",
  ],
  authors: [{ name: "Deko Elektrik" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.dekoelektrik.com.tr",
    title: "Deko Elektrik - Elektrik Malzemeleri ve Çözümleri",
    description:
      "Geniş ürün yelpazesi ile elektrik malzemeleri, anahtar priz, sigorta kutuları, kablo ve aydınlatma ürünleri sunuyoruz.",
    siteName: "Deko Elektrik",
    images: [
      {
        url: "/assets/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "Deko Elektrik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deko Elektrik - Elektrik Malzemeleri ve Çözümleri",
    description:
      "Projeleriniz için güvenilir ve kaliteli elektrik malzemeleri Deko Elektrik'te.",
    images: ["/assets/images/favicon.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/images/favicon.png",
    },
  },
  alternates: {
    canonical: "/",
  },
  charSet: "UTF-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
