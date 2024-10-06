import React from 'react';
import CompNavbar from '../Components/Fragments/CompNavbar';
import HeroSection from '../Components/Elements/HeroSection/Index';
import Featured from '../Components/Elements/Feature/Index';
import Footer from '../Components/Elements/Footer/Index';
import CardCourseLayout from '../Components/Layouts/CardCourseLayout';

const HomePage = () => {
  return (
   <div className=''>
      <CompNavbar/>      
     
      <HeroSection herotitle="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
       herodesc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat 
       berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."/>
       
       <Featured/>

      <CardCourseLayout/>

      <HeroSection herotitle="Mau Belajar Lebih Banyak?"
      herodesc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"/>
    
    <Footer/>
    </div>
  );
};

export default HomePage;
