import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { NavLink } from "react-router-dom";
import Main from "../section/home/Main";
import Category from "../section/home/Category";
import Review from "../section/home/Review";
import RecommendProduct from "../section/home/RecommendProduct";
import OurTeam from "../section/home/OurTeam";
import More from "../section/home/More";

const Home = () => {



  return (
    <Layout>
      <Main/>
      <Category/>
      <RecommendProduct/>
      <OurTeam/>
      <Review/>
      <More/>
    </Layout>
  );
};

export default Home;
