import nike from './../../assets/nike-shoe.png'

const FirstSection = () => {

    return (
        <section className="grid md:grid-cols-2 h-screen items-center p-12 gap-6">
            <div className="firstSection-lef flex flex-col justify-center gap-2 w-full">
                <button className='w-24 border-solid border-2 border-gray rounded-lg p-2 hover:bg-orange-500'>
                    In Stock
                </button>
                <h1 className="text-5xl font-bold">
                    Nike Air Max 90
                </h1>
                <span className="text-2xl font-bold text-gray-500">
                    LIMITED EDITION
                </span>
                <p className="text-lg">
                    All that shimmers isn't gold. Decked out in sumptuously smooth, satin-esque fabric,
                    the Dunk Low is dressier than your average pair of sneakers but sporty enough to dress down.
                    Its classic colour combo nods to the sneaker's original Be True to Your School ad campaign,
                    rooting your look to coveted off-court allure.
                </p>
                <div className="flex gap-6 mt-5">
                    <span className="text-3xl font-bold">
                        489$
                    </span>
                    <button className="bg-orange-500 p-2 font-bold rounded-lg text-lg">
                        <a href="">BUY NOW</a>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:relative items-center justify-center pl-3">
                <img src={nike} alt="" className="max-h-[500px] z-20 object-scale-down" />
                <p className="flex flex-col text-[9rem] leading-[1] font-bold md:text-white/10 w-full md:absolute left-0 z-0">
                    <span>JUST</span>
                    <span>DO</span>
                    <span>IT</span>
                </p>
            </div>
        </section>
    )
}

export default FirstSection;