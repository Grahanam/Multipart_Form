import FormHeading from "./formComponents/FormHeading"
import Progress from "./formProgessBar/Progress"
import studentimg from "../assets/student.png"
import professionalimg from "../assets/engineer.png"
import parentimg from "../assets/parents.png"
import lifelonglearnerimg from "../assets/lifelong-learner.png"
import teacherimg from "../assets/teacher.png"
import otherimg from "../assets/other.png"
import FormOption from "./formComponents/FormOption"
import { useState } from "react"

let options=[
    {
        img:studentimg,
        heading:'Student',
        title:'or soon to be enrolled'
    },
    {
        img:professionalimg,
        heading:'Professional',
        title:'pursuing a career'
    },
    {
        img:parentimg,
        heading:'Parent',
        title:'of a school-aged child'
    },
    {
        img:lifelonglearnerimg,
        heading:'Lifelong learner',
        title:''
    },
    {
        img:teacherimg,
        heading:'Teacher',
        title:''
    },
    {
        img:otherimg,
        heading:'Other',
        title:''
    }
]

const Role=({next,step,prev,data,setdata})=>{

    const onselect=(option)=>{
       setdata({...data,[step]:option})
    }

    return(
        <div className="h-full w-full mb-4">
        <Progress step={step} prev={prev}/>
        <FormHeading heading={'Which describes you best?'} title={'This will help us personalize your experience'}/>
        
        <div className="flex items-center justify-center">
            <div className="w-[80%] md:w-[50%] text-xs md:text-sm">
               {options.map((option,index)=>(
                    <FormOption 
                        key={index} 
                        value={index}
                        select={data[step]}
                        img={option.img} 
                        heading={option.heading} 
                        title={option.title}
                        onselect={onselect}
                    />
                ))}
            </div>
        </div>
        {data[step]!=-1?
            <button className="text-xs md:text-base" onClick={next}>Continue</button>
        :<></>}
        
        </div>
    )
}

export default Role