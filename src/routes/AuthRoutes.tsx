import { FC, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useUserStore,{initUserinfo} from "@/store/userStore";
const authRouter: FC = ({ children }) => {
  const userInfo = useUserStore((state) => state.userInfo);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.username && location.pathname !== "/login") {
     initUserinfo()
    }
    if (userInfo.username && location.pathname === "/login") {
      navigate("/");
    }
  }, [userInfo.username, location.pathname]);

  return children;
};
export default authRouter;