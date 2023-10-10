import { Link, Outlet } from "react-router-dom"

const Member = () => {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/check'>check member</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Member