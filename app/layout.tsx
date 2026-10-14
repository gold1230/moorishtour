
import "@/app/globals.css";
import Footer from "@/Compentents/footer";
import HeaderAll from "@/Compentents/headerAll";

import type { Metadata } from "next";
import {
  Suspense,
} from "react";

import ScrollToTop from "@/Compentents/ScrollToTop";
import FloatingContactButtons from "@/Compentents/FloatingContactButtons";


export const metadata: Metadata = {
  metadataBase: new URL("https://moorishtour.com"),

  title: {
    default: "Moorish Tour | Morocco Tours & Desert Adventures",
    template: "%s | Moorish Tour",
  },

  description:
    "Discover Morocco with private tours, Sahara desert adventures, cultural journeys, imperial cities and customized travel experiences.",
};

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  

  return (
    <html
      lang="en"
      
    >
      <body >
     
       <HeaderAll />
     
        {children}

         {/* <Suspense
          fallback={null}
        >
          <VisitorTracker />
        </Suspense>
         <Suspense fallback={null}>
          <WebMCPProvider />
        </Suspense> */}
        <Footer />
     
        <ScrollToTop />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
