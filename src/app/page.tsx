import { EmptySection } from "@/components/_helpers/empty-section";
import { Benefits } from "@/components/Benefits/index.benefits";
import { FeatureIndex } from "@/components/Features/index.feature";
import { HomeHero } from "@/components/Hero/home-hero";
import { ServicesIndex } from "@/components/Services/index.services";


export default function Home() {
  return (
    <>
    <HomeHero />
    <EmptySection />
    <Benefits />
    <ServicesIndex />
    <FeatureIndex />
    </>
  );
}
