import Hero from "@/components/Hero";
import home from "../../public/home.jpg";

export default function Home() {
  return (
    <div className="">
      <Hero image={home} title="Home" description="Proffessional Cloud Hosting" />
    </div>
  );
}
