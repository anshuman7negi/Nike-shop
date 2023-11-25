import shoes from './../../assets/ShoeSection2.svg'

const SecondSection = () => {

    return(
        <>
        <section className="flex flex-col items-center relative py-8 h-[70vh]">
            <p className="beast text-[1.2rem] sm:text-2xl font-bold tracking-widest animate-bounce">
                    UNLEASH THE BEAST
                </p>
                <p className="text-[5rem] bottom-[10%] right-[10%] sm:right-auto absolute nike font-black text-white/10 md:font-extrabold md:top-[15%] md:text-[18rem] lg:text-[26rem] lg:top-0 sm:text-[15rem] sm:top-[25%]">
                    NIKE
                </p>
                <img className="max-h-[700px] z-20 object-scale-down" src={shoes} alt="" />
                <p className="hidden sm:flex absolute sm:text-8xl sm:gap-40 md:gap-44 sm:top-[55%] md:top-[50%] text-red-500 font-extrabold md:text-9xl z-0 lg:gap-64">
                    <span>SNEA</span> <span className="text-white">KER</span>
                </p>
        </section>
        </>
    )
}

export default SecondSection;