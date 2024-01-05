import React from "react";
import Head from "next/head";
import type { HeeaderProps } from "./types";

const Header: React.FC<HeeaderProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Header;
