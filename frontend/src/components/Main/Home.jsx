import LatestProducts from "../common/LatestProducts";
import FeaturedProducts from "../common/FeaturedProducts";

import Hero from "./Hero";
import Layout from "../Layouts/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <LatestProducts />
        <FeaturedProducts />
      </Layout>
    </>
  );
};

export default Home;
