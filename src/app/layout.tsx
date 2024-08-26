import "../../public/styles/globals.css";
import { EstedadFont } from "@/utils/font";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { ReactNode, Suspense } from "react";
import { Metadata } from "next";
import ReactQueryProvider from "./Providers";
import Header from "src/common/Header";
import Footer from "src/common/Footer";
import NextTopLoader from "nextjs-toploader";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "گیل ملک | Gil Melk",
  description: " انواع ملک با شرایط مختلف در استان گیلان",
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fa" dir="rtl" className={EstedadFont.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/images/logo/logo.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/logo/logo.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/logo/logo.png"
          type="image/png"
        />
        <GoogleTagManager
          gtmId={`GTM-${process.env.NEXT_PUBLIC_GOOGLETAGMANAGER_ID}`}
        />
        <GoogleAnalytics
          gaId={`GTM-${process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID}`}
        />
      </head>
      <body>
        <ReactQueryProvider>
          <NextUIProvider>
            <NextTopLoader
              color="#2ED573"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            <Toaster />
            <Header />
            <main className="container flex flex-col min-h-screen my-7">
              {children}
            </main>
            <Footer />
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;