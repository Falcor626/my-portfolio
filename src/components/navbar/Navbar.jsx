import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-champagne flex items-center justify-between p-6 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 fixed w-full top-0 right-0">
            <a href= "/" className="text-2xl">Dean Martin Solideo</a>
            <div className="flex space-x-6">
                <a href= "/#Works" className="text-2xl">Works</a>
                <a href= "/#Proskills" className="text-2xl">Skills</a>
                <a href= "/#Contact" className="text-2xl">Contact</a>
            </div>
        </header>
    );
}

export default Navbar;