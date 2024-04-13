import FormHeading from "./formComponents/FormHeading"
import Progress from "./formProgessBar/Progress"

import rightimg from "../assets/alien.png"


const Rightplace=({step,next,prev})=>{
    return(
        <>
        <Progress step={step} prev={prev}/>
        <div style={{height:'80vh'}} className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center content-center md:mb-12">
            <div className="md:w-[50%]  flex items-center justify-center">
                <div className="w-56 h-56">
                    <img src={rightimg} alt="alien" />
                </div>
            </div>
            <div className="md:w-[35%] text-left px-4">
            <FormHeading 
                heading={'You\'re in the right place'} 
                title={'Brilliant gets you hands-on to help improve your professional skills and knowledge.You\'ll interact with concepts and solve fun problems in math,science, and computer science'}
            />
            </div>
        </div>
        <button className="text-xs md:text-base" onClick={next}>Continue</button>
        </div>
        </>
    )
}

export default Rightplace