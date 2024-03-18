import { Modal, Input, Form, Select, Card, Table, Button } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical">
        <Form.Item label="Müşteri Adı" rules={[{ required: true }]}>
          <Input placeholder="Müşteri Adı Giriniz " />
        </Form.Item>
        <Form.Item label="Telefon No" rules={[{ required: true }]}>
          <Input placeholder="Bir Telefon No yazınız" />
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi" rules={[{ required: true }]}>
          <Select placeholder="Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card className=" justify-end">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>547.98₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>592.92₺</b>
            </div>
            <Button
              className="mt-4 w-full text-center bg-blue-600 hover:bg-white justify-end"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş Oluştur
            </Button>
          </Card>
      </Form>

    </Modal>
  );
};

export default CreateBill;
