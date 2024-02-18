import { SessionProvider } from 'next-auth/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useEffect } from 'react'


const queryClient = new QueryClient();
export default function Document({session}: any ) {


  return (
    <Html lang="en">
      <Head />
      <body >
      <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
        <Main />
        </SessionProvider>
        </QueryClientProvider>
        <NextScript />
      </body>
    </Html>
  )
}
