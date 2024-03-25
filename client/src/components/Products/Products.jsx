import React, {useState,useEffect} from "react";
import axios from "axios";

const Products = () => {

    const [products,setProducts] = useState([]);
    

    const getAllProducts = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/getAllProduct")
            console.log(response.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts()
    },[])

  return (
    <div
      className="products-wrapper grid gap-4 "
      style={{ gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))" }}
    >
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
            alt=""
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info p-2">
          <span className="font-bold flex flex-col">Elma</span>
          <span>12₺</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
