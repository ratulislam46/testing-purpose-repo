import React, { useState } from 'react';
import { NavbarMenu } from '../../MockData/data';
import { FaDumbbell } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav>
                <div className='container mx-auto flex items-center justify-between py-8'>
                    {/* logo section  */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <FaDumbbell />
                        <p>Coders</p>
                        <p className='text-orange-400'>Gyms</p>
                    </div>
                    {/* Menu section  */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-2 font-bold uppercase'>
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} className='inline-blocklock py-1 px-3 hover:text-orange-400 font-semibold'> {item.title} </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* lcons section  */}
                    <div className='flex items-center gap-4'>
                        <button className='text-2xl hover:bg-orange-500 hover:text-white rounded-full p-2'>
                            <CiSearch></CiSearch>
                        </button>
                        <button className='text-2xl hover:bg-orange-500 hover:text-white rounded-full p-2'>
                            <PiShoppingCartThin />
                        </button>
                        <button className='font-semibold rounded-md border-2 px-6 py-2 primary-color border-orange-500 hover:text-white hover:bg-orange-500 hidden md:block'>
                            Login
                        </button>
                    </div>
                    {/* Mobile hamburger menu section  */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar section  */}
            <ResponsiveMenu open={open} />
        </>
    );
};

export default Navbar;