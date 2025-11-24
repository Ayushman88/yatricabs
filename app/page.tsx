import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeaturesBanner from "@/components/home/FeaturesBanner";
import Features from "@/components/home/Features";
import WhyYatri from "@/components/home/WhyYatri";
import Tariff from "@/components/home/Tariff";
import WhyChoose from "@/components/home/WhyChoose";
import RentalBenefits from "@/components/home/RentalBenefits";
import WhyChooseOneway from "@/components/home/WhyChooseOneway";
import ExploreIndia from "@/components/home/ExploreIndia";
import Testimonials from "@/components/home/Testimonials";
import GetAppNow from "@/components/home/GetAppNow";
import OperationalCities from "@/components/home/OperationalCities";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesBanner />
      <Features />
      <WhyYatri />
      <Tariff />
      <WhyChoose />
      <RentalBenefits />
      <WhyChooseOneway />
      <ExploreIndia />
      <Testimonials />
      <GetAppNow />
      <OperationalCities />
      <Footer />
    </main>
  );
}
