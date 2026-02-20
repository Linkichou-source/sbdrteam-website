"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Constat from "@/components/Constat";
import Approche from "@/components/Approche";
import Methodologie from "@/components/Methodologie";
import Resultats from "@/components/Resultats";
import Temoignages from "@/components/Temoignages";
import Ratings from "@/components/Ratings";
import Expertise from "@/components/Expertise";
// Newsletter removed
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Constat />
      <Approche />
      <Methodologie />
      <Resultats />
      <Temoignages />
      <Ratings />
      <Expertise />
      {/* Newsletter removed */}
      <CTA />
      <Footer />
      {!cookiesAccepted && (
        <CookieBanner onAccept={() => setCookiesAccepted(true)} onRefuse={() => setCookiesAccepted(true)} />
      )}
    </main>
  );
}
