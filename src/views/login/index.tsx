import style from "./index.module.css"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const login = () => { 
    navigate("/")
  }
  return (
    <>
      <div className="w-full h-m relative"  style={{background:'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)'}}>
        <div className={style.login_box}>
        <h2>Login</h2>
        <form>
          <div  className={style.user_box}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className={style.user_box}>
            <input type="password" name="" required="" />
            <label>Password</label>
            </div>
            <div>
            <Button block style={{background:'var(--primary-color)'}} className="py-5 !text-white border-none" onClick={login}>登录</Button>
            </div>
        </form>
      </div>
      </div>
      
    </>
  )
}
export default Login
