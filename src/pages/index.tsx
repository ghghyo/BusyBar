/*

import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOne from "@/components/layout/banner/BannerOne";
import OverviewOne from "@/components/containers/overview/OverviewOne";
import VoiceSlider from "@/components/containers/voice/VoiceSlider";
import Clone from "@/components/containers/clone/Clone";
import Sponsor from "@/components/containers/sponsor/Sponsor";
import Tour from "@/components/containers/tour/Tour";
import UseCaseSlider from "@/components/containers/use-case/UseCaseSlider";
import Broadcast from "@/components/containers/broadcast/Broadcast";
import Faq from "@/components/containers/faq/Faq";
import TestimonialOne from "@/components/containers/testimonial/TestimonialOne";
import CtaOne from "@/components/containers/cta/CtaOne";
import LanguageSlider from "@/components/containers/language/LanguageSlider";
const Home = () => {
  return (
    <Layout header={true} footer={1}>
      <BannerOne />
      <OverviewOne />
      <VoiceSlider />
      <Clone />
      <Sponsor />
      <Tour />
      <UseCaseSlider />
      <Broadcast />
      <Faq />
      <LanguageSlider />
      <TestimonialOne />
      <CtaOne />
    </Layout>
  );
};

export default Home;
*/

// replaced with index-two.tsx code

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
import AboutSponsor from "@/components/containers/sponsor/AboutSponsor";
import Form from "@/components/containers/sponsor/Form";

 //instruct ai section move above reviews, unlock the best day and night can be second section, people then reviews then forms, call out the first 1000 users in the forms*/}

const HomeTwoLight = () => {
  return (
    <Layout header={true} footer={4}>
      <div id="contactus">
      <BannerTwo />
      </div>
      <Publish />

      <div id="aboutus">
      <GenerateTwo />
      </div>
      
      <TeamOne />
      {/*<TourTwoLight /> */}
      <hr id="horizon-break" />
      <Features />
      <AboutSponsor />
      {/*<PricingOne />*/}
      <div id="faqtwolight">
        <FaqTwoLight />
      </div>
      


      {/*
      <CtaTwoLight />
      <Tools />
  */}
    </Layout>
  );
};

export default HomeTwoLight;
