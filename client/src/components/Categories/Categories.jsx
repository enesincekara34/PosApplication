import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, message, Table } from "antd";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // categoryCreateModal
  const [isModalOpen2, setIsModalOpen2] = useState(false); // categoryEditModal
  const [form] = Form.useForm(); // Form nesnesini kullan

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/getAllCategory"
      );
      setCategories(response.data.categories);
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishCreateCategory = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/createCategory",
        values
      );
      //console.log(response.data);
      message.success("Kategori Ekleme Başarılı");
      setIsModalOpen(false);
      form.resetFields();
      fetchCategories();
    } catch (error) {
      message.error("Kategori Ekleme Başarısız");
    }
  };

  const onFinishCategoryDelete = async(categoryId) => {
    try {
      const response = await axios.delete("http://localhost:9000/api/deleteCategory",{data:{categoryId}})
      //console.log(response.data);
      message.success("Kategori Kaydı Silindi")
      fetchCategories()
      setIsModalOpen2(false) 
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      title: "Category Başlığı",
      dataIndex: "title",
      render: (text, record) => {
        console.log(text);
        return (
          <p>{text}</p>
        )
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, record) => {
        // console.log("text",text);
        // console.log("enes",record);
        return (
          <div>
            <Button>Ekle</Button>
            <Button
            type="primary"
            danger
            onClick={() => onFinishCategoryDelete(record._id)}
            >Sil</Button>
            <Button>Güncelle</Button>
          </div>
        );
      },
    },
  ];



  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <ul className="flex gap-4 flex-col text-lg">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-green-700 px-10 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] "
          >
            <span>{category.title}</span>
          </li>
        ))}
        <li
          className="bg-green-700 px-10 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] "
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined className="text-white md:text-2xl" />
        </li>

        <li
          className="bg-green-700 px-10 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] "
          onClick={() => setIsModalOpen2(true)}
        >
          <EditOutlined className="text-white md:text-2xl" />
        </li>
      </ul>
      <Modal
        title="Kategori Ekle"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinishCreateCategory} form={form}>
          <Form.Item
            name="title"
            label="Kategori Adı"
            rules={[{ required: true, message: "Ürün Adı Boş Geçilemez" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Kategori Düzenle"
        open={isModalOpen2}
        onOk={() => setIsModalOpen2(false)}
        onCancel={() => setIsModalOpen2(false)}
        footer={false}
      >
        <Form>
          <Table bordered dataSource={categories} columns={columns} />
        </Form>
      </Modal>
    </div>
  );
};

export default Categories;
