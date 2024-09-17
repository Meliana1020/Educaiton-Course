const Label  = (props) => {
    const {htmlFor, children} = props;
    return (
        <label htmlFor={htmlFor}
        className='block text-slate-700 text-base font-bold mb-2 justify-start text-left'>
        {children}<span className='text-red-500'>*</span></label>
    )
}

export default Label;