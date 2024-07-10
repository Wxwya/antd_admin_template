import {Layout,Sider,Header,Content,memo,Outlet,Head,boxShadow,Menu,useLayout,Suspense} from "./rely";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import MobileNav from "./mobileNav"
const Vertical = ({ items }) => {
  const { changeCollapsed, collapsed,onSelect,selectKey,pc } = useLayout();
  return (
    <Layout className="h-m">
      <Header className=" pl-3" style={{ boxShadow }}> <Head /></Header>
      <Layout>
        {pc ? (<>
          <Sider  collapsed={collapsed} className=" relative">
          <Menu className=" overflow-y-auto h-full" defaultSelectedKeys={selectKey} mode="inline" items={items}  onSelect={onSelect}  />
          <div onClick={changeCollapsed} className=" absolute w-5 h-5 bg-[rgba(166,198,255,1)] rounded-full top-1/2 right-[-10px] text-white flex justify-center items-center text-xs" >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </div>
        </Sider>
        </>) : null}
        
        <Content>
        <Suspense fallback={<div>loading1111</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
      { pc?null:<MobileNav items={items} />} 
    </Layout>
  );
};
export default memo(Vertical);
