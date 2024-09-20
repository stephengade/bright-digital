import { EmptySection } from "@/components/_helpers/empty-section";
import { Benefits } from "@/components/Benefits/index.benefits";
import { HomeFeaturedBlogIndex } from "@/components/FeatureBlogPosts/index.blog-post";
import { FeatureIndex } from "@/components/Features/index.feature";
import { FooterIndex } from "@/components/Footer/index.footer";
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
    <HomeFeaturedBlogIndex />
    <FooterIndex />
    </>
  );
}
