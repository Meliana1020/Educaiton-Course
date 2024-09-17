const InputButton = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center rounded-md">
            <input type="email" className="size-2.10 px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-none border-t border-b border-l border-r border-gray-300 focus:outline-none rounded-lg "
                placeholder="Masukkan emailmu"
                name="email"/>
            <button className="size-2.10 px-4 py-2 bg-orange-500 rounded-t md:rounded-r-lg md:rounded-none border-orange-500 focus:outline-none text-white rounded-lg">
                Subscribe</button>
        </div>
    )
 }

 export default InputButton;