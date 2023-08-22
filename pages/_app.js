import React, { useEffect, useState } from "react";
import "@/styles/globals.scss";
import { GoToTop, Layout, MoveToTop } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoToTop />
    </Layout>
  );
}
