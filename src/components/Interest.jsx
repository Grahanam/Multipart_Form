import FormHeading from "./formComponents/FormHeading"
import FormOption from "./formComponents/FormOption"
import Progress from "./formProgessBar/Progress"

import careerimg from "../assets/increase.png"
import exploreimg from "../assets/earth.png"
import mathimg from "../assets/think.png"
import focusimg from "../assets/target.png"
import somethingimg from "../assets/eyes.png"

let options=[
    {
        img:careerimg,
        heading:'Learning specific skills to advance my career',
        title:''
    },
    {
        img:exploreimg,
        heading:'Exploring new topics I\'m interested in',
        title:''
    },
    {
        img:mathimg,
        heading:'Refereshing my math foundation',
        title:''
    },
    {
        img:focusimg,
        heading:'Exercising my brain to stay sharp',
        title:''
    },
    {
        img:somethingimg,
        heading:'Something else',
        title:''
    }
]

const Interest=({next,step,prev,data,setdata})=>{
    const onselect=(option)=>{
        setdata({...data,[step]:option})
     }
    return(
        <>
        <div className="h-full w-full mb-4 px-2">
            <Progress step={step} prev={prev}/>
            <FormHeading heading={'Which are you most interested in?'} title={'Choose just one.This will help us get you started(but won\'\t limit your experience)'}/>
                <div className="flex items-center justify-center mb-3">
                    <div className="w-[80%] md:w-[50%] text-xs md:text-sm text-left">
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
                <button className="text-xs md:text-base"onClick={next}>Continue</button>
            :<></>}
        </div>
        </>
    )
}

export default Interest