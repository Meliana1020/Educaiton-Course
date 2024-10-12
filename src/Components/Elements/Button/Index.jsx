const Button = (props) => {
    const { children, variant, textColor, size, onClick, onChange, fontType} = props;
    return (
      <div className="flex mt-5 text-center justify-center items-center">
        <button
          className={`${size} ${variant} ${fontType} ${textColor} rounded-md py-2 px-2 z-index`}
          onClick={onClick} onChange={onChange}
        >
          {children}
        </button>
      </div>
    );
  };
  
  export default Button;
  