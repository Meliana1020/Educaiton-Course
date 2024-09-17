
const CompNavbar = (props) => {
    const { children } = props;
    return (
        <div className="Navigation w-full px-4 py-5 bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
            {children}
        </div>
    )
}
const Logo = () => {
    return (
        <div className="flex items-center">
           <img src="src/assets/Images/logo.png" alt="Logo" className="" />
        </div>
    )
}

const Avatar = () => {
    return (
        <div className="flex items-center justify-end flex-1">
            <p className="text-gray-500 hidden md:block mr-4">Kategori</p>
                <img src="src/assets/Images/Avatar.png" alt="Profile" className="w-10 h-10 rounded hidden md:block mr-4"/>
                <img src="src/assets/Images/hamburger.png" alt="Menu" className="w-10 h-10 md:hidden mr-4"/>
        </div>
    )
}

CompNavbar.Logo = Logo;
CompNavbar.Avatar = Avatar;

export default CompNavbar;