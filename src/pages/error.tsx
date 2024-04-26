import React from "react";
import ErrorContent from "@/components/containers/error/ErrorContent";
import Layout from "@/components/layout/Layout";

const ErrorPage = () => {
  return (
    <Layout header={1} footer={2}>
      <ErrorContent />
    </Layout>
  );
};

export default ErrorPage;
