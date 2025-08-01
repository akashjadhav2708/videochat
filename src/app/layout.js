import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const outfit = Outfit({
 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
