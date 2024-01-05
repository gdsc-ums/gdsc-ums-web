import type { AppProps } from "next/app";

import ProductSans from "@/constants/fonts";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ProductSans.className}>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}
