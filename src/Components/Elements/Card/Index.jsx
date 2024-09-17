const Card = (props) => {
    const {cardimg, name, description, avatar} = props
    return (
        <div className="container mx-auto px-6">
            <div className="p-5 w-full max-w-lg bg-white rounded-lg border shadow-xl">
                <img src={cardimg} alt="Course Image" className="rounded-md mb-4" />
                <h3 className="pb-2 text-2xl font-bold text-black">{name}</h3>
                <p className="pb-4 text-m text-black w-full">{description}</p>
                <div className="flex items-center">
                    <img src={avatar} alt="Instructor" className="w-10 h-10 rounded-full mr-5"/>
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-sm">Instructor Name</p>
                        <p className="text-gray-500 text-xs">Instructor Position</p>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-5 gap-10">
                    <div className="text-yellow-500 font-bold text-xl">⭐⭐⭐⭐⭐</div>
                    <div className="font-bold text-2xl text-green-500" style={{ color: "#3ECF4C" }}>
                        Rp 300K
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
