import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layouts from "@/layouts";
import { PieChartOutlined } from "@ant-design/icons";
const Login = lazy(() => import("@/views/login"))
const User = lazy(() => import("@/views/user"))
const Home = lazy(() => import("@/views/home"))
const NotFound = lazy(() => import("@/views/404"))
const Posts = lazy(() => import("@/views/posts"))
const About = lazy(() => import("@/views/about"))
let falg = false
const asyncRouter = [
  {
    path: "/info",
    name: "info",
    meta: {title:"测试二级路由",icon:<PieChartOutlined />},
    children: [
      {
        path: "/info/posts",
         name: "posts",
         meta: {title:"文章列表",icon:<PieChartOutlined />},
        element:<Posts />,
      },
      {
        path: "/info/about",
        name: "about",
        meta: {title:"关于我们",icon:<PieChartOutlined />},
        element:<About />,
      },
    ]
  }

]
 const otherRouter = [
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "*",
    element: <NotFound />,
  }
  // 404 页面

]
const normalRouter =  [
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/user",
          meta: {title:"用户管理",icon:<PieChartOutlined />},
          element:<User />,
        },
        {
          path: "/home",
          meta: {title:"首页",icon:<PieChartOutlined />},
          element:<Home />,
        },
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
      ]
    },

  
]
const handleAsyncRouter = (permissions, routes) => { 
  return routes.filter(item => { 
    const t = permissions.includes(item.name)
    if(item.children && t) {
      item.children = handleAsyncRouter(permissions,item.children)
    }
    return t
  } )
}
const initRouter = (permissions) => { 
  if (falg) { 
    return {router:[...normalRouter, ...otherRouter],navlist:normalRouter[0].children}
  }
  const newArr = handleAsyncRouter(permissions,asyncRouter)
  normalRouter[0].children = [...normalRouter[0].children, ...newArr]
  const router = [...normalRouter, ...otherRouter]
  falg=true
  return {router,navlist:normalRouter[0].children}
}

export default initRouter

