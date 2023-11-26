import men from './../../assets/men.png'
import women from './../../assets/women.png'
import kid from './../../assets/kids.png'

const Product = () => {
    return (
        <section className="pt-12 flex flex-col gap-20">
            <div className="flex gap-7 items-center justify-center">
                <img src={men} alt="" className="product-type h-[100px] rounded-md" />
                <img src={women} alt="" className="product-type h-[100px] rounded-lg" />
                <img src={kid} alt="" className="product-type h-[100px] rounded-lg" />
            </div>
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
                    <div className="flex flex-col p-3 gap-4 bg-[#222933]  rounded-xl">
                        <img src={men} alt="" className="max-h-[400px] rounded" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                Nike Air Max 90
                            </h3>
                            <p className="text-lg text-white/70 font-bold">
                                MEN
                            </p>
                            <p className="text-lg font-bold">
                                $120 USD
                            </p>
                            <button className="text-lg font-bold bg-orange-500 p-2 rounded-lg w-full mt-2 ">
                                View Product
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col p-3 gap-4 bg-[#222933]  rounded-xl">
                        <img src={women} alt="" className="max-h-[400px] rounded" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                Nike Air Max 90
                            </h3>
                            <p className="text-lg text-white/70 font-bold">
                                MEN
                            </p>
                            <p className="text-lg font-bold">
                                $120 USD
                            </p>
                            <button className="text-lg font-bold bg-orange-500 p-2 rounded-lg w-full mt-2 ">
                                View Product
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col p-3 gap-4 bg-[#222933]  rounded-xl">
                        <img src={kid} alt="" className="max-h-[400px] rounded" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                Nike Air Max 90
                            </h3>
                            <p className="text-lg text-white/70 font-bold">
                                MEN
                            </p>
                            <p className="text-lg font-bold">
                                $120 USD
                            </p>
                            <button className="text-lg font-bold bg-orange-500 p-2 rounded-lg w-full mt-2 ">
                                View Product
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col p-3 gap-4 bg-[#222933]  rounded-xl">
                        <img src={kid} alt="" className="max-h-[400px] rounded" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                Nike Air Max 90
                            </h3>
                            <p className="text-lg text-white/70 font-bold">
                                MEN
                            </p>
                            <p className="text-lg font-bold">
                                $120 USD
                            </p>
                            <button className="text-lg font-bold bg-orange-500 p-2 rounded-lg w-full mt-2 ">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;