import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto px-10">
      <Head>
        <title>Codex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
