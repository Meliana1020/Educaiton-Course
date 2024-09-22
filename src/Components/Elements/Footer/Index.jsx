const Footer = () => {
  return (
    <div className="bg-white py-10 px-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img className="md:w-[240px]  mb-3" src="/logo.png" alt="Logo" />
          <p className="text-black font-bold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-black mt-4">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="text-black mt-1">+62-877-7123-1234</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Kategori</h3>
          <ul>
            <li>
              <a href="#" className="text-black">
                Digital & Teknologi
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Pemasaran
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Manajemen Bisnis
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Pengembangan Diri
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Desain
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
          <ul>
            <li>
              <a href="#" className="text-black">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Ketentuan Layanan
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Bantuan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Komunitas</h3>
          <ul>
            <li>
              <a href="#" className="text-black">
                Tips Sukses
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-black mb-4 md:mb-0">©2024 by Meliana All Rights Reserved.</p>
          <div className="flex space-x-4">
            <img src="/linkedin.png" alt="LinkedIn" className="border-gray-300" />
            <img src="/facebook.png" alt="Facebook" className="border-gray-300" />
            <img src="/instagram.png" alt="Instagram" className="border-gray-300" />
            <img src="/twitter.png" alt="Twitter" className="border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
