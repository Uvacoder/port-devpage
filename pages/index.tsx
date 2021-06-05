import Head from "next/head";
import React from "react";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander May - Frontend Developer</title>
        <meta
          name="description"
          content="Experienced Frontend Developer with a focus on high software quality"
        />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <Hero />
      <Features />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}
