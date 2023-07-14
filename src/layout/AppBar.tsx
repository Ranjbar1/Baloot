import { Layout, Button, theme } from "antd";
const { Header } = Layout;
export default function AppBar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ backgroundColor: colorBgContainer }}>
      <Button>register</Button>
    </Header>
  );
}
