import CompNavbar from "../Components/Fragments/CompNavbar";
import Button from "../Components/Elements/Button/Index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Elements/Footer/Index";

const DetailProductPage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser){
      setIsLoggedIn(true);
    }
  }, []);

    const handleLogin = () => {
      navigate("/login");
    };

    const handleBuy = () => {
      console.log("Beli Sekarang")
      navigate("/paymentsucces");
    };
  
    return (
    <>
      <CompNavbar/>
      
      <div className="text-medium lg:max-w-screen flex mt-8 mb-2 mx-10 flex-wrap">
        <div className="text-gray-500">Beranda / Desain / </div>
        <div className="text-gray-900">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
        </div>
      </div>

      <div className="justify-between lg:max-w-screen flex flex-col-reverse lg:flex-row mt-8 mb-2 mx-10">
     
        <div className="flex-col lg:w-2/3 w-full lg:mt-0 bg-white border-collapse border-[0.1px] p-4">
          <h1 className="font-bold mb-2">Deskripsi</h1>
          <p className="text-gray-500">
            Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan
            yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
            orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan,
            menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin
            rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan
            umpan balik.
          </p>
        </div>

        <div className="flex-col lg:w-1/3 w-full lg:ml-6 border-collapse border-[0.1px] p-4">
          <h1 className="font-bold mb-3">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
          </h1>
          <div className="flex-col">
            <h2 className="mb-2 font-semibold text-2xl text-green-400">Rp 250</h2>
            <p className="text-blue-600">Penawaran Spesial tersisa 2 hari lagi!</p>
          </div>
          
          {!isLoggedIn ? (
            <Button
            onClick={handleLogin}
            variant="bg-green-500"
            textColor="text-white"
            size="w-full"
            >Login
            </Button>
          ): ( 
            <Button
            onClick={handleBuy}
            variant="bg-green-500"
            textColor="text-white"
            size="w-full"
            >Beli Sekarang</Button>
          )}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default DetailProductPage;