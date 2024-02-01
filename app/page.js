import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import BoatPerfect from "@/components/BoatPerfect";
import Events from "@/components/Events";
import Exploring from "@/components/Exploring";
import Features from "@/components/Features";
import FishingPerfect from "@/components/FishingPerfect";
import Footer from "@/components/Footer/Footer";
import Model from "@/components/Model";
import RideHero from "@/components/RideHero";

export default function Home() {
  return (
    <>
      <RideHero />
      <Model />
      <FishingPerfect />
      <Exploring />
      <BoatPerfect />
      <Blog />
      <Features />
      <Events />
      <Benefits />
      <Footer />
    </>
  );
}
