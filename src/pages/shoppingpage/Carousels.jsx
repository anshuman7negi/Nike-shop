import { useState } from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import { useEffect } from "react";


const Carousels = () => {

   const cards = [
    <FirstCard key={1}/>,
    <SecondCard key={2}/>
   ]

   const [currentCard,setCurrentCard] = useState(1)

   useEffect(() => {
    const interval = setInterval(() => {
        setCurrentCard((prevCard) => (prevCard === cards.length ? 1 : prevCard + 1));
    },5000);
    return () => clearInterval(interval);
   },[cards.length])


    return(
        <div className="bg-gray-900 text-white min-h-screen p-6">
            {cards[currentCard - 1]}
        </div>
    )
}

export default Carousels;