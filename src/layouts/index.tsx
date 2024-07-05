import { useContext, useEffect, useState } from "react";

import Level from "./level"
import Vertical from "./vertical"
import useSystemStore from "@/store/systemStore"
import content from "@/utils/createContext"
const Layouts = () => {
  const layout = useSystemStore(state => state.layout);
  const { navlist } = useContext(content)
  const [items,setItems] = useState([])

  const handleNavlist = (list:any) => {
    const arr = list.reduce((prev:any,cur:any) => {
      if (cur.path === '/') {
        return prev
      }
      let obj = { key: cur.path, label: cur.meta.title, icon: cur.meta.icon }
      if (cur.children && cur.children.length == 1) {
        obj.key=cur.children[0].path
        obj.label = cur.children[0].meta.title
        obj.icon = cur.children[0].meta.icon
      }
      if(cur.children&&cur.children.length> 1){ 
        obj.children = handleNavlist(cur.children)
      } 
      prev.push(obj)
      return prev
    }, [])
    return arr
  }
  useEffect(() => { 
    setItems(handleNavlist(navlist))
  },[])

  
  return <>
    { layout == "vertical" ? <Vertical items={items} /> : <Level items={items} />}
  </>
}
export default Layouts