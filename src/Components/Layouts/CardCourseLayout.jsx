import CardCourse from "../Fragments/CardCourse";
import  axios from "axios";
import { useEffect, useState } from "react";

const CardCourseLayout = () => {
  const [products, setProducts] = useState([]); // Inisialisasi state untuk menyimpan data produk

  useEffect(() => {
    axios
      .get(
        "https://67070bb5a0e04071d228fc63.mockapi.io/education/course/product"
      )
      .then((response) => {
        setProducts(response.data); // Set data dari API ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center cursor-pointer mb-4">
      {products.map((card) => (
        <CardCourse key={card.id}>
          <CardCourse.Cardimg Cardimg={card.image} />
          <CardCourse.TitleDesc
            title={card.title}
            Description={card.description}
          />
          <CardCourse.Avatar avatar={card.avatar} />
          <CardCourse.RatingPrice price={card.price}/>
        </CardCourse>
      ))}
    </div>
  );
};

export default CardCourseLayout;
