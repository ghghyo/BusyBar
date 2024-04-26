import React from "react";
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import TeamOne from "@/components/containers/team/TeamOne";
import TourTwo from "@/components/containers/tour/TourTwo";
import GenerateOne from "@/components/containers/generate/GenerateOne";
import Publish from "@/components/containers/publish/Publish";
import Features from "@/components/containers/features/Features";
import PricingOne from "@/components/containers/pricing/PricingOne";
import FaqTwo from "@/components/containers/faq/FaqTwo";
import CtaTwo from "@/components/containers/cta/CtaTwo";
import Tools from "@/components/containers/tools/Tools";

const HomeTwo = () => {
  return (
    <Layout header={true} footer={3}>
      <BannerTwo />
      <TeamOne />
      <GenerateOne />
      <TourTwo />
      <Publish />
      <hr id="horizon-break" />
      <Features />
      <PricingOne />
      <FaqTwo />
      <CtaTwo />
      <Tools />
    </Layout>
  );
};

export default HomeTwo;
