import React from "react";

import { FeatureCollection } from "../../Components/FeatureCollection/FeatureCollection";
import { Hero } from "../../Components/Hero/Hero";
import { Layout } from "../../Components/Shared/Layout";

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureCollection />
      </Layout>
    </>
  );
};
