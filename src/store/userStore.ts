import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "@/utils/createStore"

class UserStore { 
  userInfo = {
    username:""
  }

}

const useUserStore = create<UserStore>()(
  immer((set) => ({...new UserStore()}))
)
const getuserinfo = () => { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve({ code: 200, data: {username:"123"} })
    },1500)
  })
}

export const initUserinfo = async () => { 
  const res = await getuserinfo()
  console.log(res);
  
  if (res.code === 200) { 
    console.log(useUserStore.setState);
    useUserStore.setState(state => ({...state,userInfo:res.data}))
    console.log("设置成功");
    
  }
}
export default createSelectors(useUserStore)