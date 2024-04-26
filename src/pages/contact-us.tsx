import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import ContactMain from "@/components/containers/contact/ContactMain";
import CtaBlack from "@/components/containers/cta/CtaBlack";

const ContactUs = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Contact Us" page="Contact Us" />
      <ContactMain />
      <CtaBlack />
    </Layout>
  );
};

export default ContactUs;
