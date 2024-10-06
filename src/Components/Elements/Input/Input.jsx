const Input = (props) => {
    const { type, placeholder, name, value, onChange, readOnly } = props; // Tambahkan value dan onChange
    return (
        <input
            type={type}
            className="mb-2 text-sm border rounded w-full py-2 px-3 text-slate-500 border-slate-300"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
        />
    );
};

export default Input;
