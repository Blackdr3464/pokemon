import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='w-full h-14 bg-teal-600 px-12 flex items-center justify-center md:justify-start fixed top-0 left-0 right-0'>
            <img src={Logo} alt='logo' />
        </div>
    );
};

export default Header;
