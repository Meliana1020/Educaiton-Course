import Categories from "./Categories"
import Feature from "./Feature"

const Featured = () => {
    return (
        <div className="pr-10 pl-10 pt-8 w-full">
        <div className="lg:w-full flex flex-col md:flex-col items-start">
            <Feature/>
            <Categories/>
        </div>
        </div>
    )
}

export default Featured;