const AuthLayout = (props) => {
    const { children, title, subtitle, type } = props;
    return (
        <div className='flex justify-center items-center mt-3'>
          <div className='w-full max-w-max shadow-2xl bg-white rounded-2xl px-6 py-2'>
             <h1 className='text-3xl font-bold mb-2 text-black-800 text-center'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8 text-center'>{subtitle}</p>
            {children}
          </div>
        </div>
    )
}

export default AuthLayout;