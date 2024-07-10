import { Suspense,memo,useMemo } from "react";
import { Outlet } from "react-router-dom"
import { Layout,Menu,Drawer } from "antd"
import Head from "./Head"
const { Header, Content, Sider } = Layout;
const boxShadow = '0 15px 25px rgba(0,0,0,.6)'
import useLayout from "./useLayout";
export {Suspense, Outlet, Layout, Header, Content, Sider,memo,Head,boxShadow,Menu,useLayout,useMemo,Drawer}