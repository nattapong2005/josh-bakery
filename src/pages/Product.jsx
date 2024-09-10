import Layout from "../components/Layout";
import Main from "../section/product/Main";
import AllProduct from "../section/product/AllProduct";

const Product = ({cake, cookie, croissant}) => {
  
  return (
    <Layout>
      <Main />
      <AllProduct cake={cake} cookie={cookie} croissant={croissant} />
    </Layout>
  );
};

export default Product;
