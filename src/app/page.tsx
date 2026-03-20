import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { EpisodesSection } from "@/components/sections/EpisodesSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <EpisodesSection />
      <CharactersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
