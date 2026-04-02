import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Products } from "@/components/sections/Products";
import { Architecture } from "@/components/sections/Architecture";
import { Autopilot } from "@/components/sections/Autopilot";
import { Moats } from "@/components/sections/Moats";
import { Valuation } from "@/components/sections/Valuation";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <Architecture />
      <Autopilot />
      <Moats />
      <Valuation />
      <EarlyAccess />
      <Pricing />
      <CTA />
    </>
  );
}
