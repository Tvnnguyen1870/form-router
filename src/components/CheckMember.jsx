import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const CheckMember = () => {
    const [number, setNumber] = useState();

    const navigate = useNavigate();
    const handleRedirectUser = () => {
        setTimeout(() => {
            navigate('/');
        }, 3000)
    }

    const onChangeNumber = () => {
        setNumber(number)
        if (!number) {
            handleRedirectUser();
            return (
                <div>Bạn không phải thành viên nhóm này. Bạn sẽ được chuyển hướng về trang chủ sau 3 giây</div>
            );
        }
        <div>
            <nav>
                <ul>
                    <li><Link to='/computer'>Máy tính</Link></li>
                    <li><Link to='/phone'>Điện thoại</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    }

    return (
        <div>
            
        </div>
    )
}

export default CheckMember
