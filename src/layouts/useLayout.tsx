
import  { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import useSystemStore, { changeCollapsed} from "@/store/systemStore"
const useLayout = () => {
  const collapsed = useSystemStore((state) => state.collapsed)
  return {
    changeCollapsed,
    collapsed,
  }
}
export default useLayout