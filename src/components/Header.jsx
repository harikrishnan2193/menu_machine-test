import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import logo from '../images/Screenshot_2025-01-27_214339-removebg-preview.png'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-custom-background">
            <div className="pt-8 mx-auto px-6 md:px-20 lg:px-40">
                <nav className="flex flex-col sm:flex-row items-center justify-between py-3  space-y-4 sm:space-y-0">
                    <img className="md:mb-[-73px] relative z-10" src={logo} width={'25%'} alt="logo image" />

                    <div className="hidden text-white xl:flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
                        <Link to='services'><a className="hover:text-blue-400 hover:cursor-pointer">HOME</a></Link>
                        <Link to='skills-section'><a className="hover:text-blue-400 hover:cursor-pointer">MENU</a></Link>
                        <Link to='potfolio'><a className="hover:text-blue-400 hover:cursor-pointer">MAKE A RESERVATION</a></Link>
                        <Link to='potfolio'><a className="hover:text-blue-400 hover:cursor-pointer">CONTACT US</a></Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="xl:hidden text-white text-3xl"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div
                    className={`fixed top-0 right-0 w-3/4 sm:w-1/3 h-full bg-black transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-50`}
                >
                    <div className="p-5">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-3xl"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start space-y-10 p-5 text-white">
                        <Link to='services'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">HOME</a></Link>
                        <Link to='skills-section'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">MENU</a></Link>
                        <Link to='potfolio'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">MAKE A RESERVATION</a></Link>
                        <Link to='experience'><a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">CONTACT US</a></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
