import { Suspense,memo, } from "react";
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import Head from "./Head"
const { Header, Content, Sider } = Layout;
const boxShadow='0 15px 25px rgba(0,0,0,.6)'
export {Suspense, Outlet, Layout, Header, Content, Sider,memo,Head,boxShadow}