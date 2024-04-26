import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import TeamMain from "@/components/containers/team/TeamMain";
import CtaAbout from "@/components/containers/cta/CtaAbout";

const Teams = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Our Teams" page="Our Teams" />
      <TeamMain />
      <CtaAbout />
    </Layout>
  );
};

export default Teams;
