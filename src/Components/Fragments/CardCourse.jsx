
const CardCourse = (props) => {
    const { children } = props;
    return (
        <div className="lg:max-w-screen flex gap-8 pl-2">
             <div className="lg:w-full p-5 max-w-lg bg-white rounded-lg border shadow-xl">
             {children}
             </div>
        </div>
    );
}

const Cardimg = (props) => {
    const {Cardimg} = props;
    return (
        <a href="#">
        <img src={Cardimg}
            alt="category"
            className="pb-5 rounded-lg w-full" />
        </a>
    )
}

const TitleDesc = (props) => {
    const { title , Description} = props;
    return (
        <>
        <h3 className="pb-2 text-2xl font-bold text-black ">{title}</h3>
        <p className="text-m text-black w-full">{Description}</p>
        </>
    )
}

const Avatar = (props) => {
    const {avatar} = props;
    return (
        <div className="flex items-center pt-4">
            <img src={avatar} alt="Instructor" className="w-10 h-10 rounded-full mr-5"/>
            <div className="flex flex-col">
                <p className="text-gray-800 text-sm">Instructor Name</p>
                <p className="text-gray-500 text-xs">Instructor Position</p>
            </div>
        </div>
    )
}

const RatingPrice = () => {
    return (
      <div className="flex items-center justify-between pt-5 gap-10">
        <div className="text-yellow-500 font-bold text-xl">⭐⭐⭐⭐⭐</div>
        <div style={{ color: "#3ECF4C", fontSize: "2xl", fontWeight: "bold" }}>Rp 300K</div>
      </div>
    )
  };

CardCourse.Cardimg = Cardimg;
CardCourse.TitleDesc = TitleDesc;
CardCourse.Avatar = Avatar;
CardCourse.RatingPrice = RatingPrice;

export default CardCourse;
