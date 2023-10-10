import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/about/us'>about us</Link></li>
                    <li><Link to='/about/me'>about me</Link></li>
                    <li><Link to='/member'>member</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout