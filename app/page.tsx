import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Vitrina from "@/components/Vitrina";
import CarWrapping from "@/components/CarWrapping";
import UbicacionSection from "@/components/UbicacionSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Vitrina />
      <CarWrapping />
      <UbicacionSection />
    </main>
  );
}
