import { useState } from "react"
import Final from "../components/Final"
import Interest from "../components/Interest"
import Level from "../components/Level"
import Rightplace from "../components/Rightplace"
import Role from "../components/Role"
import End from "../components/End"


const Form=()=>{
    const [step, setstep] = useState(1)
    const [formdata,setformdata]=useState({
        0:-1,
        1:-1,
        2:-1,
        3:-1,
        4:-1
    })
  const prevStep=()=>{
    if(step>1){
      setstep(step-1)
    }
  }
  const nextStep=()=>{
    setstep(step+1)
  }
    switch (step) {
        case 1: 
          return (
            <Role step={step} prev={prevStep} next={nextStep} data={formdata} setdata={setformdata}/>
          )
        case 2: 
          return (
            <Interest step={step} prev={prevStep} next={nextStep} data={formdata} setdata={setformdata}/>
          )
        case 3: 
          return (
            <Rightplace step={step} prev={prevStep} next={nextStep}/>
          )
        case 4:
          return (
            <Level step={step} prev={prevStep} next={nextStep} data={formdata} setdata={setformdata}/>
          )
        case 5:
          return (
            <Final step={step} prev={prevStep} next={nextStep}/>
          )
        case 6:
            return(
              <End step={step} prev={prevStep} data={formdata} setdata={setformdata}/>
            )
        // never forget the default case, otherwise VS code would be mad!
        default: 
           // do nothing
      }
    // return(
    //     <>
    //         <h1>{step}</h1>
    //         <button onClick={prev}>Prev</button>
    //         <button onClick={next}>Next</button>
    //     </>
    // )
}

export default Form