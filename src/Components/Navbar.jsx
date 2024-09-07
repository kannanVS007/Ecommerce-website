import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);
    const handleAdminPanelClick = () => {
        window.open('/admin', '_blank');
    };


    return (
        <div className='flex items-center justify-between py-1 font-medium bg-white fixed top-0 left-0 w-full z-50 shadow-md px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

            {/* Logo */}
            <Link to='/'><img className='w-36' src={assets.logo} alt="Logo" /></Link>

            {/* Menu Links */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            {/* Icons (Search, Profile, Cart, Mobile Menu) and Admin Panel */}
            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
                <div className='group relative'>
                    <Link to='/login'>
                        <img onClick={() => navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="Cart Icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                {/* Admin Panel Button */}
                <button onClick={handleAdminPanelClick} className="hidden sm:block bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm">
                    Admin Panel
                </button>

                {/* Mobile Menu Icon */}
                <img onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="Menu Icon" />
            </div>

            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Close Menu" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                    <NavLink onClick={() => { setVisible(false); navigate('/admin'); }} className='py-2 pl-6 border'>ADMIN PANEL</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;