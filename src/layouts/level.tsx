import { Layout, Sider, Header, Content, memo, Outlet, Head,Menu,useLayout } from "./rely";
import { useMemo } from "react";
const Level = ({items}) => {
  const { changeCollapsed, collapsed } = useLayout();
  const imgurl = useMemo(()=>(collapsed?'https://img1.baidu.com/it/u=3430690511,3867923153&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=453':'https://upload.shejihz.com/2020/02/961c95fffbdd3ecc99fdb4e33faa8237.jpg'),[collapsed])
  return (
    <Layout className="h-m">
      <Sider collapsed={collapsed} >
        <div className="flex flex-col w-full h-m ">
          <div className=" h-[var(--ant-layout-header-height)]"> <img className="h-full w-full" src={imgurl} alt=""  /></div>
          <Menu className=" overflow-y-auto flex-1"  defaultSelectedKeys={["1"]}  mode="inline"  items={items} />
        </div>
      </Sider>
      <Layout>
        <Header className=" pl-3">  <Head /> </Header>
        <Content className=""><Outlet /></Content>
      </Layout>
    </Layout>
  );
};
export default memo(Level);
