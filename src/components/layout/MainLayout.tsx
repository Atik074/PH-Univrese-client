import { Layout, Menu} from "antd";
import {  Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";
const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "dashboard",
//     label:<NavLink to='/admin/dashboard'>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: 'create-admin',
//         label:<NavLink  to='/admin/create-admin'>Create admin</NavLink>,
//       },
//       {
//         key: 'create-faculty',
//         label:<NavLink to='/admin/create-faculty'>create faculty</NavLink>,
//       },
//       {
//         key:'create-student' ,
//         label:<NavLink to='/admin/create-student'>create student</NavLink>
//       }
//     ],
//   }

// ];

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
          items={adminSidebarItems}
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
         
            <Outlet/>
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
