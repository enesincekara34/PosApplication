import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddProducts from "./AddProducts";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen3,setIsModalOpen3] = useState(false)

  const dispatch = useDispatch()

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/getAllProduct"
      );
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div
      className="products-wrapper grid gap-4 "
      style={{ gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))" }}
    >
      {products.map((product, index) => (
        <div
          key={index}
          className="product-item border hover:shadow-lg cursor-pointer transition-all select-none"
          onClick={() => dispatch(addProduct({...product,quantity:1}))}
        >
          <div className="product-img">
            <img
              src={product.img}
              alt=""
              className="h-28 object-cover w-full border-b"
            />
          </div>
          <div className="product-info p-2">
            <span className="font-bold flex flex-col">{product.title}</span>
            <span>{product.price}₺</span>
          </div>
        </div>
      ))}

      <div
        className="bg-green-700 px-10 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] "
        onClick={()=>setIsModalOpen3(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>

      <AddProducts products={products} setProducts={setProducts} isModalOpen3={isModalOpen3} setIsModalOpen3={setIsModalOpen3}/>
    </div>
  );
};

export default Products;
