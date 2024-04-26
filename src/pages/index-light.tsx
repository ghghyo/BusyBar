import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOnelight from "@/components/layout/banner/BannerOnelight";
import OverviewOne from "@/components/containers/overview/OverviewOne";
import VoiceSlider from "@/components/containers/voice/VoiceSlider";
import CloneLight from "@/components/containers/clone/CloneLight";
import Sponsor from "@/components/containers/sponsor/Sponsor";
import Tour from "@/components/containers/tour/Tour";
import UseCaseSlider from "@/components/containers/use-case/UseCaseSlider";
import Broadcast from "@/components/containers/broadcast/Broadcast";
import FaqLight from "@/components/containers/faq/FaqLight";
import LanguageSlider from "@/components/containers/language/LanguageSlider";
import TestimonialOneLight from "@/components/containers/testimonial/TestimonialOneLight";
import CtaOne from "@/components/containers/cta/CtaOne";

const HomeLight = () => {
  return (
    <Layout header={true} footer={2}>
      <BannerOnelight />
      <OverviewOne />
      <VoiceSlider />
      <CloneLight />
      <Sponsor />
      <Tour />
      <UseCaseSlider />
      <Broadcast />
      <FaqLight />
      <LanguageSlider />
      <TestimonialOneLight />
      <CtaOne />
    </Layout>
  );
};

export default HomeLight;
