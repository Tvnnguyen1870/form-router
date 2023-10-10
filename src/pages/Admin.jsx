import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate()

  const isAdmin = props;

  useEffect(() => {
    if(!props.isAdmin){
      console.log('không được phép vào')
    }
    setTimeout(() => {
      navigate('/')
    }, 3000)
  
  }, [props.isAdmin])


  return (
    <div>
      Admin
    </div>
  )
}

export default Admin
