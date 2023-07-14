/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Card, Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import formatPrice from "../utils/formatPrice";
import formatTime from "../utils/formatTime";

const { Title, Text } = Typography;

const CardItem = ({ item }) => {
  const { id, title, price, date } = item;
  return (
    <Card
      key={id}
      cover={<img alt="house" src="/vite.svg" />}
      style={{ minWidth: "300px", margin: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={4}>{title}</Title>
        <Text strong>{formatPrice(price)}</Text>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <CalendarOutlined />
          <Text>{formatTime(date)}</Text>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
