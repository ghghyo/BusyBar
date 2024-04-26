import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BlogLayoutTwo from "@/components/containers/blog/BlogLayoutTwo";

const BlogTwo = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner desc="Blog Layout 02" page="Blog Layout 02" />
      <BlogLayoutTwo />
    </Layout>
  );
};

export default BlogTwo;
