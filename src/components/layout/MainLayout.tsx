import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "profile",
  },
  {
    key: "2",
    label: "Dashboard",
    children: [
      {
        key: "21",
        label: "user",
      },
      {
        key: "22",
        label: "Product",
      },
    ],
  },
  {
    key: "3",
    label: "prfolees",
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            height: "4rem",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <h1>PH Universe</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>Main content should go here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;