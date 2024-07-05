
import  { useState } from "react";
import useSystemStore, { changeCollapsed} from "@/store/systemStore"
const useLayout = () => {
  const collapsed = useSystemStore((state) => state.collapsed)
  return {
    changeCollapsed,
    collapsed,
  }
}
export default useLayout