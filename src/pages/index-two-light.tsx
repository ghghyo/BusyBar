import React from "react";
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import TeamOne from "@/components/containers/team/TeamOne";
import GenerateTwo from "@/components/containers/generate/GenerateTwo";
import TourTwoLight from "@/components/containers/tour/TourTwoLight";
import Publish from "@/components/containers/publish/Publish";
import Features from "@/components/containers/features/Features";
import PricingOne from "@/components/containers/pricing/PricingOne";
import FaqTwoLight from "@/components/containers/faq/FaqTwoLight";
import CtaTwoLight from "@/components/containers/cta/CtaTwoLight";
import Tools from "@/components/containers/tools/Tools";

const HomeTwoLight = () => {
  return (
    <Layout header={true} footer={4}>
      <BannerTwo />
      <TeamOne />
      <GenerateTwo />
      <TourTwoLight />
      <Publish />
      <hr id="horizon-break" />
      <Features />
      <PricingOne />
      <FaqTwoLight />
      <CtaTwoLight />
      <Tools />
    </Layout>
  );
};

export default HomeTwoLight;
