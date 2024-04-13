import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FormHeading from "./formComponents/FormHeading"
import Progress from "./formProgessBar/Progress"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import cheerimg from "../assets/cheer-up.png"
import FormSqrOption from "./formComponents/FormSquareOption";
import thinkimg from "../assets/think.png"
import educationimg from "../assets/education.png"
import { useEffect, useState } from "react"

let options=[
    {
        img:thinkimg,
        heading:'Foundational Math',
        title:'Build your foundational skills in algebra, geometry, and probability'
    },
    {
        img:educationimg,
        heading:'Mathematical Thinking',
        title:'Build your foundational skills in algebra, geometry, and probability'
    },
]

const End=({step,next,prev,data,setdata})=>{
    const [show,setshow]=useState(true)
    const onselect=(option)=>{
        setdata({...data,[step-2]:option})
    }
    useEffect(()=>{
        setTimeout(()=>{setshow(false)},2000)
    },[])
    return(
        <>
        <div className={`${show?'absolute':'hidden'} w-full h-full bg-white flex items-center justify-center `} >
            <div className="text-black font-bold text-xl flex flex-col px-3 md:px-24">
                <div className="mb-4">
                    <svg aria-hidden="true" role="status" className="inline w-16 h-16 me-3 text-yellow-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E700"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="text-lg md:text-2xl md:pr-10">
                    Finding learning path recommendations for you based on your response
                </div>
                
            </div>
        </div>
        <div className={`${show?'hidden':'flex'} h-full flex-col justify-center items-center`}>
            <FormHeading 
                heading={'Learning paths based on your answers'} 
                title={'Choose one to get started. You can switch anytime.'}
            /> 
       
            <div className="grid grid-cols-1  md:grid-cols-2 gap-3  items-center content-center md:mt-8 md:mb-12 w-[70%] lg:w-[50%]">
            {options.map((option,index)=>(
                    <FormSqrOption 
                        key={index}
                        value={index}
                        select={data[step-2]}
                        img={option.img} 
                        heading={option.heading} 
                        title={option.title}
                        onselect={onselect}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default End