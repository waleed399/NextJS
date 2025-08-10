import Hero from "@/components/Hero";
import home from "../../public/home.jpg";

export default function Home() {
  return (
    <main>
      <Hero image={home} title="Cloud Hosting" description="Fast, reliable, and scalable hosting for modern apps." />
    </main>
  );
}
