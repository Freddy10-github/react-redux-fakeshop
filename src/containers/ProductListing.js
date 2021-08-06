import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProducComponents from "./ProductComponents";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-4 pt-16 max-w-screen-lg mx-auto gap-4">
      <ProducComponents />
    </div>
  );
};

export default ProductListing;
