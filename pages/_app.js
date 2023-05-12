import React, { useEffect, useState } from "react";
import "@/styles/globals.scss";
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
