import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Nav";
import { Toaster } from "react-hot-toast";
import Cursor from "../../components/Cursor/Cursor";
import SliceProvider from "./SliceProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul Chouhan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-screen min-h-screen overflow-x-hidden`}
      >
        <SliceProvider>
        <Nav />
          {children}
          <Cursor />
        <Toaster position="top-right" />
        </SliceProvider>
      </body>
    </html>
  );
}
