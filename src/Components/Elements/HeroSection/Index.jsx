import Button from "../Button/Index";
import InputButton from "../InputButton/Index";

const HeroSection = (props) => {
    const {herotitle, herodesc} = props;
    return (
        <div className="lg:max-w-screen">
        <div className="flex py-5 px-5 flex-wrap">   
            <div className="lg:w-full rounded-xl text-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
                <div className="text-center text-white p-3 sm:p-10 m-10">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{herotitle}</h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6">{herodesc}</p>                 
                     
                      {herotitle === "Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!" ? (
                         <Button variant="bg-green-500" textColor="text-white" size="px-8 py-2"> 
                            Temukan Video Course Untuk Dipelajari
                         </Button>
                        ) : (
                            
                        <InputButton/>
                        )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeroSection;