import Label from "./Label"
import Input from "./Input"
const InputForm = (props) => {
    const { label, name, type, placeholder, value, onChange, readOnly } = props;
    return (
        <div className="mb-3">
            <Label htmlFor={name}>{label}</Label>
            <Input 
            name={name} 
            type={type} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange}
            readOnly={readOnly}/>
        </div>
    )
}

export default InputForm;
