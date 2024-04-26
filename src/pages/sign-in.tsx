import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import SignInAccount from "@/components/containers/authentication/SignInAccount";

const SignIn = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Sign In" page="Sign In" />
      <SignInAccount />
    </Layout>
  );
};

export default SignIn;
