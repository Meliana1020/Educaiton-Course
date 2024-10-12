import { useNavigate } from "react-router-dom";

const CardCourse = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleCardCourse = () => {
    navigate("/detailproduct");
  };
  
  return (
    <div
    className="flex flex-col max-w-sm sm:w-1/2 md:w-1/3"
    onClick={handleCardCourse}
    >
      <div className="bg-white p-4 rounded-lg shadow-xl w-full h-full justify-between space-y-4">
        {children}
      </div>
    </div>
  );
};

const Cardimg = (props) => {
  const { Cardimg } = props;
  return (
    <>
      <img src={Cardimg} alt="category" className="w-full h-48 object-cover rounded-md" />
    </>
  );
};

const TitleDesc = (props) => {
  const { title, Description } = props;

  const truncateDescription = (desc, maxLength = 100) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + '...';
    }
    return desc;
  };
  return (
    <>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600">{truncateDescription(Description)}</p>
    </>
  );
};

const Avatar = (props) => {
  const { avatar } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        src={avatar}
        alt="Instructor"
        className="w-10 h-10 rounded-full mr-5"
      />
      <div className="flex flex-col">
        <p className="text-gray-800 text-sm font-semibold">Instructor Name</p>
        <p className="text-gray-500 text-xs">Instructor Position</p>
      </div>
    </div>
  );
};

const RatingPrice = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center mt-aut">
      <div className="flex space-x-1">⭐⭐⭐⭐⭐</div>
      <div style={{ color: "#3ECF4C" }} className="text-base sm:text-lg md:text-base lg:text-base font-bold">
      $ {price}
      </div>
    </div>
  );
};

CardCourse.Cardimg = Cardimg;
CardCourse.TitleDesc = TitleDesc;
CardCourse.Avatar = Avatar;
CardCourse.RatingPrice = RatingPrice;

export default CardCourse;
