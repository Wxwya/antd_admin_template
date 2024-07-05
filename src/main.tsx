import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "@/views/Loading/index.tsx";
import AuthRoutes from "@/routes/AuthRoutes";
import App from "./App.tsx";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthRoutes>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </AuthRoutes>
  </BrowserRouter>
);
