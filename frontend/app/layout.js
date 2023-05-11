"use client";
import "./globals.css";
import Header from "./components/Header";
import AppProvider from "@/GlobalContext/AppProvider";
import Footer from "./footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
