import Head from "next/head";
import Link from "next/link";
import React from "react";
import PageTemplate from "../components/Templates/PageTemplate";

function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>I'm About</PageTemplate>
    </div>
  );
}

export default About;
