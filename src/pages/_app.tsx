import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider, Hydrate,} from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "react-hot-toast";

const Andora = localFont({
  src: "../../public/font/AndoraModernSerif-lgrvw-1.otf",
  variable: "--font-Andora",
});
const mulish = localFont({
  src: "../../public/font/Mulish-VariableFont_wght.ttf",
  variable: "--font-Mulish",
});
const queryClient = new QueryClient();




export default function App({
  Component,
  pageProps: { session, ...pageProps },
}:AppProps) {
  return (
    
      <main className={`${mulish.className} ${Andora.variable}`}>
        <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Toaster />
          <SessionProvider session={session}>
            <Component {...pageProps} />{" "}
          </SessionProvider>
          </Hydrate>
        </QueryClientProvider>
      </main>
  
  );
}
