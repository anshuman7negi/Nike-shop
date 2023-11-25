import modelshoes from './../../assets/modelwithshoes.avif'

const ThirdSection = () => {
    return(
        <section className="bg-white pb-4 text-black flex flex-col items-center justify-center p-3 pt-[4rem] sm:pt-[10rem] md:pt-[16rem] gap-6">
            <h1 className="text-2xl font-bold">STEP INTO THE STYLE</h1>
            <p className="md:w-3/4 md:text-center text-xl">Explore our extensive collection of shoes designed for every member of your family. 
                From stylish and sophisticated options for men to elegant and comfortable choices for women, 
                and playful and durable selections for kids, our website offers a wide range of footwear to suit every taste and need. 
                Discover the latest trends, superior craftsmanship, and exceptional comfort that our shoes provide.
            </p>
            <img src={modelshoes} alt="model with shoes" />
            <button className="bg-orange-500 px-5 py-2 rounded-xl text-xl font-bold text-white">
                BROWSE OUR COLLECTION
            </button>
        </section>
    )
}

export default ThirdSection;