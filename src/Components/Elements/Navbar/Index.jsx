const Navbar = () => {
    return (
        <div className="Navigation w-full px-4 py-5 bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
            <div className="flex items-center">
                {/* Logo */}
                <img src="src/assets/images/logo.png" alt="Logo" className="" />
            </div>
            {/* Kategori dan Avatar */}
            <div className="flex items-center justify-end flex-1">
                <p className="text-gray-500 hidden md:block mr-4">Kategori</p>
                <img src="src/assets/images/avatar.png" alt="Profile" className="w-10 h-10 rounded hidden md:block mr-4"/>
                <img src="src/assets/images/hamburger.png" alt="Menu" className="w-10 h-10 md:hidden"/>
            </div>
        </div>
    );
}

export default Navbar;
