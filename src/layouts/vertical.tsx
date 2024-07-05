import {Layout,Sider,Header,Content,memo,Outlet,HeadboxShadow} from "./rely";
import { Button, Menu } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import useLayout from "./useLayout";
const Vertical = ({ items }) => {
  const { changeCollapsed, collapsed } = useLayout();
  return (
    <Layout className="h-m">
      <Header className="pl-0" style={{ boxShadow }}>
        <Head />
      </Header>
      <Layout>
        <Sider collapsed={collapsed} className=" relative">
          <Menu
            className=" overflow-y-auto h-full"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
          <div
            onClick={changeCollapsed}
            className=" absolute w-5 h-5 bg-[rgba(166,198,255,1)] rounded-full top-1/2 right-[-10px] text-white flex justify-center items-center text-xs"
          >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </div>
        </Sider>
        <Content className="">
          {/* <Suspense fallback={<Loading />}> */}
          <Outlet />
          {/* </Suspense> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default memo(Vertical);
