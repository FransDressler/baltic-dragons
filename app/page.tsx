"use client";
import HeroSection from "./components/Hero";
import MissionSection from "./components/Mission";
import News from "./components/News";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <MissionSection />

<div className="h-90 w-full bg-gradient-to-b from-sky-800 to-sky-900"/>
  
      <Achievements />

<div className="h-90 w-full bg-gradient-to-b from-sky-900 to-sky-950" />
      <News />

      </div>
  );
}
