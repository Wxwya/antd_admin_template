import { memo, Menu, useLayout, Drawer } from "./rely";
import {changeCollapsed} from "@/store/systemStore";
const MobileNav = ({ items }) => { 
  const { collapsed, onSelect, selectKey, pc } = useLayout();
  const drawerStyles ={
    header: {
      height: 0,
      overflow: 'hidden',
      padding: 0,
    },
    body: {
      padding: 0,
      background: 'linear-gradient(180.00deg, rgb(76, 141, 235) ,rgb(76, 96, 235) 100%)',
    }
  }
  return (<>
     <Drawer open={collapsed} width={200} placement="left"  onClose={changeCollapsed}   styles={drawerStyles}>
     <Menu  className=" overflow-y-auto flex-1" defaultSelectedKeys={selectKey} mode="inline" items={items} onSelect={onSelect} />
  </Drawer>
  </>)
 
}
export default memo(MobileNav)

