import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BlogDetails from "@/components/containers/blog/BlogDetails";

const BlogSingle = () => {
  return (
    <Layout header={true} footer={2}>
      <Banner
        desc="There are many variations of passages of Lorem Ipsum"
        page="Blog Details"
      />
      <BlogDetails />
    </Layout>
  );
};

export default BlogSingle;
