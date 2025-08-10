import Hero from "@/components/Hero";
import performance from "../../../public/performance.jpg";

export default function Performance() {
  return (
    <main>
      <Hero image={performance} title="Performance" description="Optimized speed and low latency worldwide." />
    </main>
  );
}
