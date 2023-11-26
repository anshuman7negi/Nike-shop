import Carousels from "./Carousels";
import Product from "./Product";


const MainShopping = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-3 md:p-6">
            <Carousels/>
            <Product/>
        </div>
    )
}

export default MainShopping;