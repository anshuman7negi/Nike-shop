import shoe from './../../assets/nike-shoe.png'
import circle from './../../assets/circlebg.png'

const SecondCard = () => {
    return(
        <section className="carousel-card grid md:grid-cols-2 border rounded p-2">
            <div className='flex flex-col justify-between items-center pb-7'>
                <div className="text-5xl font-extrabold m-auto md:rotate-[-20deg]">
                    <p className="text-lg font-bold">Vintage Collection</p>
                    <h2 className="text-[#FFB800]">SNEAKERS</h2>
                    <h2>SALE</h2>
                </div>
                <div className="self-end flex flex-col items-end font-bold gap-7">
                    <p>Half the price, twice the style.</p>
                    <button className="bg-[#FFB800] text-black px-3 rounded-lg">SHOP NOW</button>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <img src={shoe} alt="" className="max-h-[300px] z-20" />
                <img src={circle} alt="background circle" className="absolute max-h-[200px] top-[5%] z-0 rotate-[-20deg]" />
            </div>
        </section>
    )
}

export default SecondCard;