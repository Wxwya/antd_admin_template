import { memo, useMemo } from "react";
import useSystemStore, {
  changeLayout,
  changeCollapsed,
  changeTheme,
} from "@/store/systemStore";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
const Head = () => {
  const layout = useSystemStore((state) => state.layout);
  const collapsed = useSystemStore((state) => state.collapsed);
  const items: MenuProps["items"] = useMemo(
    () => [
      {
        key: "2",
        label: "切换布局",
        onClick: changeLayout,
      },
      {
        key: "3",
        label: "切换主题",
        onClick: changeTheme,
      },
      {
        key: "4",
        danger: true,
        label: "退出登录",
      },
    ],
    []
  ); 
  const left = useMemo(()=>({
    level:( <div className=" text-2xl cursor-pointer" onClick={()=>changeCollapsed()}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>),
    vertical:(<img src="https://upload.shejihz.com/2020/02/961c95fffbdd3ecc99fdb4e33faa8237.jpg" className="w-[400px] h-full"></img>)
  }),[layout]) 
  // onClick={changeLayout}
  return (
    <>
      <div
        className="h-full flex justify-between items-center "
      >
        <div className="h-full flex items-center">
          {left[layout]}
        </div>
        <div>
          <Dropdown menu={{ items }} arrow trigger={["click"]}>
              <span className="text-lg">xwya</span> 
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default memo(Head);
