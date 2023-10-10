import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const isLogin = localStorage.getItem('isLogin') === 'true';

    if(isLogin) return <Navigate to='/' />

    const handleLogin = () =>{
        localStorage.setItem('isLogin', true);
        navigate('/')
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
