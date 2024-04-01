import React, {useState,useEffect} from "react";
import axios from "axios";
import { Modal, Button, Form, Input, message, Select } from "antd";

const AddProducts = ({
  products,
  setProducts,
  isModalOpen3,
  setIsModalOpen3,
}) => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
          const response = await axios.get(
            "http://localhost:9000/api/getAllCategory"
          );
          setCategories(response.data.categories);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

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

  const onFinishCreateProduct = async (values) => {
    try {
      const response = await axios.post("http://localhost:9000/api/createProduct", values);
      console.log("yeni ürün",response.data);
      //setproducts([...products, response.data.newProduct]);
      getAllProducts()
      setIsModalOpen3(false);
      message.success("Ürün Kaydı Başarılı");
    } catch (error) {
      message.error("Başarısız İşlem");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories()
    getAllProducts()
  }, []);

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen3}
      onCancel={() => setIsModalOpen3(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinishCreateProduct}>
        <Form.Item
          label="Ürün Adı"
          rules={[{ required: true, message: "Ürün Adı Boş Geçilemez" }]}
          name="title"
        >
          <Input placeholder="Ürün adı giriniz" />
        </Form.Item>
        <Form.Item
          label="Ürün Görseli"
          rules={[
            { required: true, message: "Ürün Görseli Alanı Boş Geçilemez" },
          ]}
          name="img"
        >
          <Input placeholder="Ürün görseli giriniz" />
        </Form.Item>
        <Form.Item
          label="Ürün Fiyatı"
          rules={[
            { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez" },
          ]}
          name="price"
        >
          <Input placeholder="Ürün fiyatı giriniz" />
        </Form.Item>

        <Form.Item
          label="Kategori"
          rules={[
            { required: true, message: "Ürün Kategori Alanı Boş Geçilemez" },
          ]}
          name="category"
        >
          <Select
            placeholder="Kategori seçiniz"
            optionFilterProp="children"
            options={categories.map((category) => ({
              label: category.title,
              value: category.title,
            }))}
          />
        </Form.Item>

        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProducts;
