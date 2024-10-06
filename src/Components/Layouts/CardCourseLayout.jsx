import useProducts from "../../Store/Products";
import CardCourse from "../Fragments/CardCourse";

const CardCourseLayout = () => {
    return (
        <div className="w-full flex flex-wrap gap-4 justify-center cursor-pointer mb-4">
            {useProducts.map((card) => (
                <CardCourse 
                    key={card.id} 
                >
                    <CardCourse.Cardimg Cardimg={card.image} />
                    <CardCourse.TitleDesc title={card.title} Description={card.description} />
                    <CardCourse.Avatar avatar={card.avatar} />
                    <CardCourse.RatingPrice />
                </CardCourse>
            ))}  
        </div>
    )
}

export default CardCourseLayout;
