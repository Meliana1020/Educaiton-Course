import React from 'react';
import CompNavbar from '../Components/Fragments/CompNavbar';
import HeroSection from '../Components/Elements/HeroSection/Index';
import Featured from '../Components/Elements/Feature/Index';
import CardCourse from '../Components/Fragments/CardCourse';
import Footer from '../Components/Elements/Footer/Index';
const HomePage = () => {
  return (
    <div className="bg-white shadow-md mb-7v">
      <div className="Navigation w-full px-8 py-5 ml-5 bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
            <CompNavbar.Logo/>
            <CompNavbar.Avatar/>
        </div>
      <HeroSection herotitle="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
       herodesc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat 
       berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."/>
       <Featured/>
      <div className='p-5 flex flex-wrap gap-10'>
         {Cards.map((card) => (
         <CardCourse key={card.id}>
          <CardCourse.Cardimg Cardimg={card.image}/>
          <CardCourse.TitleDesc title={card.title}/><p>{card.description}</p>
          <CardCourse.Avatar avatar={card.avatar}/> 
          <CardCourse.RatingPrice/>
          </CardCourse>
         ))}  
      </div>
      <HeroSection herotitle="Mau Belajar Lebih Banyak?"
      herodesc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"/>
    <Footer/>
    </div>
  );
};

const Cards = [
  {
      id: 1,
      image: "src/assets/images/course1.png", 
      title: "Big 4 Auditor Financial Analyst",
      avatar: "src/assets/images/avatar1.png",
      description: `Mulai transformasi dengan 
      instruktur profesional, harga yang terjangkau, dan...`,
  },
  {
    id: 2,
    image: "src/assets/images/course2.png", 
    title: "Big 4 Auditor Financial Analyst",
    avatar: "src/assets/images/avatar2.png",
    description: `Mulai transformasi dengan 
    instruktur profesional, harga yang terjangkau, dan...`,
},
{
  id: 3,
  image: "src/assets/images/course3.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar3.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id: 4,
  image: "src/assets/images/course4.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar4.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id: 5,
  image: "src/assets/images/course5.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar5.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id: 6,
  image: "src/assets/images/course6.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar6.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id: 7,
  image: "src/assets/images/course7.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar7.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id: 28,
  image: "src/assets/images/course8.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar8.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},

{
  id:9,
  image: "src/assets/images/course9.png", 
  title: "Big 4 Auditor Financial Analyst",
  avatar: "src/assets/images/avatar9.png",
  description: `Mulai transformasi dengan 
  instruktur profesional, harga yang terjangkau, dan...`,
},
];

export default HomePage;
