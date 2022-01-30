import Head from "next/head";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vip Group</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>I'm Home</PageTemplate>
    </div>
  );
}
