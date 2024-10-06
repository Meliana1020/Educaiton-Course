import useProducts from "../../Store/Products";
import CardCourse from "../Fragments/CardCourse";

const CardCourseLayout = () => {
    return (
        <div className='w-full flex flex-wrap gap-8 justify-center cursor-pointer mb-4'>
         {useProducts.map((card) => (
         <CardCourse key={card.id} className="flex flex-col basis-1/2 sm:basis-1/3 lg:basis-1/4">
          <CardCourse.Cardimg Cardimg={card.image}/>
          <CardCourse.TitleDesc title={card.title}/><p>{card.description}</p>
          <CardCourse.Avatar avatar={card.avatar}/> 
          <CardCourse.RatingPrice/>
          </CardCourse>
         ))}  
      </div>
    )
}

export default CardCourseLayout;

