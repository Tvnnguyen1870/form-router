import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../store/reducers/home";

function Header(){
  const homeStore = useSelector(state => state.home)

  const dispatch = useDispatch();
  console.log(homeStore);
  const handleOnLogin = () => {
    dispatch(setIsLogin(true))
  }

  const handleOnLogout = () => {
    dispatch(setIsLogin(false))
  }

  return homeStore.isLogin ? (
    <header>
        this is navbar
        <button onClick={handleOnLogout}>Logout</button>
    </header>
  ): (
    <button onClick={handleOnLogin}>Login</button>
  )
}

export default Header
