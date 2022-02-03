import React from "react";
import About from "../components/about";
import Brands from "../components/brands";
import Hero from "../components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About/>
      <Brands/>
    </div>
  );
}
