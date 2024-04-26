import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import UseCaseMain from "@/components/containers/use-case/UseCaseMain";
import CtaAbout from "@/components/containers/cta/CtaAbout";
import FaqLight from "@/components/containers/faq/FaqLight";

const UseCase = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Use Case" page="Use Case" />
      <UseCaseMain />
      <FaqLight />
      <CtaAbout />
    </Layout>
  );
};

export default UseCase;
