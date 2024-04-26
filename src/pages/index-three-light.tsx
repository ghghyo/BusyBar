import React from "react";
import Layout from "@/components/layout/Layout";
import BannerThree from "@/components/layout/banner/BannerThree";
import RemoveBg from "@/components/containers/remove/RemoveBg";
import Workflow from "@/components/containers/workflow/Workflow";
import GenerateThree from "@/components/containers/generate/GenerateThree";
import Eraser from "@/components/containers/eraser/Eraser";
import FaqThreeLight from "@/components/containers/faq/FaqThreeLight";
import TestimonialThreeLight from "@/components/containers/testimonial/TestimonialThreeLight";
import Explore from "@/components/containers/explore/Explore";
import CtaThree from "@/components/containers/cta/CtaThree";

const HomeThreeLight = () => {
  return (
    <Layout header={true} footer={6}>
      <BannerThree />
      <RemoveBg />
      <Workflow />
      <GenerateThree />
      <Eraser />
      <FaqThreeLight />
      <TestimonialThreeLight />
      <Explore />
      <CtaThree />
    </Layout>
  );
};

export default HomeThreeLight;
