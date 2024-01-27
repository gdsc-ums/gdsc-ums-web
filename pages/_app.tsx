import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import plusJakartaSans from "@/constants/fonts";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${plusJakartaSans.className} bg-baseBG`}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
