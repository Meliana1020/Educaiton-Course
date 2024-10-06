const InputButton = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:items-center rounded-md md:gap-0 gap-2">
            <input 
                type="email" 
                className="px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-none border border-gray-300 focus:outline-none"
                placeholder="Masukkan emailmu"
                name="email"
            />
            <button 
                className="px-4 py-2 bg-orange-500 rounded-b-lg md:rounded-r-lg md:rounded-none border border-orange-500 focus:outline-none text-white"
            >
                Subscribe
            </button>
        </div>
    );
};

export default InputButton;
