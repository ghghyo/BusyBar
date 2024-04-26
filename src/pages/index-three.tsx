import React from "react";
import Layout from "@/components/layout/Layout";
import BannerThree from "@/components/layout/banner/BannerThree";
import RemoveBg from "@/components/containers/remove/RemoveBg";
import Workflow from "@/components/containers/workflow/Workflow";
import GenerateThree from "@/components/containers/generate/GenerateThree";
import Eraser from "@/components/containers/eraser/Eraser";
import FaqThree from "@/components/containers/faq/FaqThree";
import TestimonialThree from "@/components/containers/testimonial/TestimonialThree";
import Explore from "@/components/containers/explore/Explore";
import CtaThree from "@/components/containers/cta/CtaThree";

const HomeThree = () => {
  return (
    <Layout header={true} footer={5}>
      <BannerThree />
      <RemoveBg />
      <Workflow />
      <GenerateThree />
      <Eraser />
      <FaqThree />
      <TestimonialThree />
      <Explore />
      <CtaThree />
    </Layout>
  );
};

export default HomeThree;
