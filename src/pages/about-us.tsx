import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import AboutClone from "@/components/containers/clone/AboutClone";
import AboutSponsor from "@/components/containers/sponsor/AboutSponsor";
import EraserTwo from "@/components/containers/eraser/EraserTwo";
import FaqLight from "@/components/containers/faq/FaqLight";
import TestimonialAbout from "@/components/containers/testimonial/TestimonialAbout";
import CtaAbout from "@/components/containers/cta/CtaAbout";


const AboutUs = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="About TechAI" page="Our Teams" />
      <AboutClone />
      <AboutSponsor />
      <EraserTwo />
      <FaqLight />
      <TestimonialAbout />
      <CtaAbout />
    </Layout>
  );
};

export default AboutUs;
