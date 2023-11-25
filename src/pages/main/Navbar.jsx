import nikelogo from './../../assets/nikelogo.svg'
import './../../index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-5 bg-gray-900 text-white">
            <img src={nikelogo} alt="logo" className="invert" />
            <ul className="navbar-items hidden md:flex items-center li-none gap-7 text-lg font-bold cursor-pointer">
                <li className="relative">
                    <Link to="/" className="nav-item">Home</Link>
                </li>
                <li className="relative">
                    <Link to="/shopping" className="nav-item">Collections</Link>
                </li>
                <li className="relative">
                    <Link to="/" className="nav-item">Contact</Link>
                </li>
                <li className="relative">
                    <Link to="/" className="nav-item">About</Link>
                </li>
            </ul>
            <ul className="hidden md:flex items-center gap-5 text-lg font-bold cursor-pointer">
                <li>Cart</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar;