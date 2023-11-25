import shoesfourth from './../../assets/shoesfourthsection.svg'

const FourthSection = () => {
    return(
        <section className="flex min-h-screen justify-center">
            <div className='bg-orange-500 p-6 items-center justify-center flex flex-col gap-9 text-2xl font-bold'>
                    <span>N</span>
                    <span>I</span>
                    <span>K</span>
                    <span>E</span>
            </div>
            <div className="relative flex items-center justify-center">
                <img src={shoesfourth} alt="" className="max-h-[500px] z-20" />
                <p className="text-9xl font-bold absolute flex flex-col gap-1 text-orange-300 bottom-[20px] right-[13px]  z-0">
                   <span>50%</span>
                   <span>OFF</span>
                </p>
                <p className="absolute top-[5%]  text-3xl sm:text-4xl md:text-6xl text-red-600 font-extrabold">
                    Special <span className="text-white">OFFer</span>
                </p>
            </div>
        </section>
    )
}

export default FourthSection;