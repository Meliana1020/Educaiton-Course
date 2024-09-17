import { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Semua Kelas');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-nowrap justify-start gap-4 mb-8 overflow-x-auto">
      {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((link) => (
        <a
          key={link}
          href="#"
          onClick={() => handleLinkClick(link)}
          className={`whitespace-nowrap inline-block border-b-2 font-bold ${
            activeLink === link ? 'text-orange-500 border-orange-500' : 'text-gray-500 border-transparent'
          }`}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
