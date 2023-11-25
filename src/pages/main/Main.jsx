import FirstSection from "../homepage/FirstSection"
import FourthSection from "../homepage/FourthSection";
import SecondSection from "../homepage/SecondSection";
import ThirdSection from "../homepage/ThirdSection";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="bg-gray-900 text-white">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Footer/>
        </div>
    )
}

export default Main;