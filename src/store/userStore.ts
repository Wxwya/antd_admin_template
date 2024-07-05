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
  immer(() => ({...new UserStore()}))
)
const getuserinfo = (): Promise<{ code: number; data: any }> => { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve({ code: 200, data: {username:"123"} })
    },1500)
  })
}

export const initUserinfo = async () => { 
  const res = await getuserinfo()
  if (res.code === 200) { 
    useUserStore.setState(state => ({...state,userInfo:res.data}))
  }
}
export default createSelectors(useUserStore)