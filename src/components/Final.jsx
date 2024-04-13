import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FormHeading from "./formComponents/FormHeading"
import Progress from "./formProgessBar/Progress"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import cheerimg from "../assets/cheer-up.png"


const Final=({step,next,prev})=>{
    return(
        <>
        <Progress step={step} prev={prev}/>
        <div style={{height:'80vh'}} className="h-full flex flex-col justify-center items-center mb-4">
        <div className="flex flex-col md:flex-row items-center content-center mb-3 md:mb-12">
            <div className="w-[40%]  flex items-center justify-center">
                <div className="w-18 h-18 md:w-56 md:h-56">
                    <img src={cheerimg} alt="alien" />
                </div>
            </div>
            <div className="text-left w-[90%] md:w-[60%] md:pr-4">
                <h3 className="text-2xl font-bold mb-6">You're on your way!</h3>
                <div className="text-yellow-400 mb-3"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                <h5 className="text-sm mb-4">"Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand.I now feel confident approaching both technical job interviews and real world problem solving situations."</h5>
                <p>- Jacob.S</p>
            </div>
        </div>
        <button className="text-xs md:text-base" onClick={next}>Continue</button>
        </div>
        </>
    )
}

export default Final