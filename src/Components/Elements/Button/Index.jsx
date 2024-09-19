const Button = (props) => {
    const { children, variant, textColor, size, onClick } = props;
    return (
      <div className="flex mt-5 text-center justify-center items-center">
        <button
          className={`${size} ${variant} font-bold ${textColor} rounded-md py-2 px-2 z-index`}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  };
  
  export default Button;
  