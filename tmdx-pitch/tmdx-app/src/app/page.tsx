import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Business from "@/components/sections/Business";
import Research from "@/components/sections/Research";
import Intelligence from "@/components/sections/Intelligence";
import Variant from "@/components/sections/Variant";
import Financials from "@/components/sections/Financials";
import Valuation from "@/components/sections/Valuation";
import Catalysts from "@/components/sections/Catalysts";
import Risks from "@/components/sections/Risks";
import Close from "@/components/sections/Close";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Business />
      <Research />
      <Intelligence />
      <Variant />
      <Financials />
      <Valuation />
      <Catalysts />
      <Risks />
      <Close />
    </>
  );
}
