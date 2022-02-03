import React from "react";
import About from "../components/about";
import Articles from "../components/articles";
import Brands from "../components/brands";
import Hero from "../components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About/>
      <Brands/>
      <Articles/>
    </div>
  );
}
