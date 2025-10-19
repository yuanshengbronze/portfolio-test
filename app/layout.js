import { Outfit, Jost } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Elbert Tristan Lie",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${jost.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
