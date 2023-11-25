import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"


const MainHomepage = () => {
    return (
        <div className="bg-gray-900 text-white">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    )
}

export default MainHomepage;