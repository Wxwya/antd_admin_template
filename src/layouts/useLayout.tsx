
import { useLocation,useNavigate } from "react-router-dom";
import useSystemStore, { changeCollapsed } from "@/store/systemStore"
import { useEffect, useState } from "react";
import useScreen from "@/hooks/useScreen";
const useLayout = () => {
  useScreen()
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const collapsed = useSystemStore((state) => state.collapsed)
  const pc = useSystemStore(state=> state.pc)
  const [selectKey,setSelectKey] =useState<string[]>([pathname])
  const onSelect = ({  key }) => { 
    navigate(key)
  }

  return {
    changeCollapsed,
    collapsed,
    onSelect,
    selectKey,
    pc
  }
}
export default useLayout