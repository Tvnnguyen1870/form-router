import { useNavigate } from "react-router-dom"

const ProtectedGroup  = ({isMember, children}) => {
  const navigate = useNavigate();
  const handleRedirectUser = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000)
  }

  if(!isMember) {
    handleRedirectUser();
    return (
      <div>Bạn không phải thành viên nhóm này. Bạn sẽ được chuyển hướng về trang chủ sau 3 giây</div>
      );
  }

  return (
    <div>{children}</div>
  )
}

export default ProtectedGroup 
