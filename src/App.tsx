import zhCN from "antd/locale/zh_CN";
import { ConfigProvider,theme } from "antd";
import initRouter from "@/routes";
import { useRoutes } from "react-router-dom";
import "dayjs/locale/zh-cn";
import useSystemStore from "@/store/systemStore"
import { useEffect, useMemo } from "react";
import Content from "@/utils/createContext"


function App() {
  const themes = useSystemStore(state => state.theme)
  const permissions = useSystemStore(state => state.permissions)
  const { router, navlist } = useMemo(() => initRouter(permissions),[]) ;
  const element = useRoutes(router);
  useEffect(() => { 
      document.documentElement.setAttribute("data-theme", themes)
  },[])
  return (
    <>
      <ConfigProvider locale={zhCN} theme={{ cssVar: true, algorithm: themes === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
        <Content.Provider value={{navlist}}>
          {element}
          </Content.Provider>
      </ConfigProvider>
    </>
  )
}

export default App;
