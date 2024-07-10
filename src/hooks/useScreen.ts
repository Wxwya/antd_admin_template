import { useEffect} from "react"
import useSystemStore, { closeCollapsed, changePc } from "@/store/systemStore";
const WIDTH = 992 // 重新计算宽度
const useScreen = () => {
  
  const { body } = document
  const pc = useSystemStore(state=>state.pc)
  const collapsed= useSystemStore(state=>state.collapsed)
  const isMobile = () => {
      const rect = body.getBoundingClientRect()    
      return rect.width - 1 < WIDTH
  }
  const resizeHandler = () => {
    if (!document.hidden) {
      const is = isMobile()
      // true移动端，falsepc端
      changePc(!is)
      if (is) {
        closeCollapsed()
      }
    }
  }
  useEffect(() => {
    const is = isMobile()
    if (is) {
      changePc(!is)
      closeCollapsed()
    }
    window.addEventListener('resize', resizeHandler)
    return () => { 
      window.removeEventListener('resize', resizeHandler)

    }
   },[])
}
export default useScreen;