import Hero from "@/components/Hero";
import reliability from "../../../public/reliability.jpg";

export default function Reliability() {
  return (
    <main>
      <Hero image={reliability} title="Reliability" description="99.99% uptime with resilient architecture." />
    </main>
  );
}
