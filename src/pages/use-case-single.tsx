import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import UseCaseAbout from "@/components/containers/use-case/UseCaseAbout";
import BroadcastLight from "@/components/containers/broadcast/BroadCastLight";
import UseCaseDetails from "@/components/containers/use-case/UseCaseDetails";
import UseCaseOverview from "@/components/containers/use-case/UseCaseOverview";
import CtaAbout from "@/components/containers/cta/CtaAbout";

const UseCaseSingle = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Website Copy & SEO" page="Use Case" />
      <UseCaseAbout />
      <BroadcastLight />
      <UseCaseDetails />
      <UseCaseOverview />
      <CtaAbout />
    </Layout>
  );
};

export default UseCaseSingle;
