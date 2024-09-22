const Input = (props) => {
    const { type, placeholder, name} = props;
    return (
        <input type={type} className="mb-2 text-sm border rounded w-full py-2 px-3  text-slate-500 border-slate-600"
            placeholder={placeholder}
            name={name}/>
    )
}

export default Input;