import Progress from "./formProgessBar/Progress"
import MathJaxEquation from './Mathjax'
import { MathJaxProvider, MathJaxFormula } from 'mathjax3-react';
import FormSqrOption from "./formComponents/FormSquareOption";
import FormHeading from "./formComponents/FormHeading";
// let options=[
//     {
//         equation:"$$5 \times \frac{1}{2} = ?$$",
//         heading:'Arithmetic',
//         title:'Introductory'
//     },
//     {
//         equation:"$$3x + 5 = 4$$",
//         heading:'Basic Algebra',
//         title:'Foundational'
//     },
//     {
//         equation:"$$x = \frac{\sqrt{3x-1}+(1+x)^2}{2a}$$",
//         heading:'Intermediate Algebra',
//         title:'Intermediate'
//     },
//     {
//         equation:"$$\int x^2dx = ?$$",
//         heading:'Calculus',
//         title:'Advanced'
//     }
// ]

const Level=({step,next,prev,data,setdata})=>{
    const onselect=(option)=>{
        setdata({...data,[step-1]:option})
     }

    return(
        <>
        <div className="h-full w-full mb-4 px-2">
        <Progress step={step} prev={prev}/>
        <FormHeading 
            heading={'What is your math comfort level?'} 
            title={'Choose the highest level you feel confident in - you can always adjust later.'}
        />
        <div className="flex items-center justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%]">
        {/* option 1 */}
        <div onClick={()=>onselect(0)} className={`${data[step-1]==0?'border-yellow-500':'border-green-300'} flex flex-col items-center content-center p-3 border rounded mb-3`}>
            <div className="">
                <MathJaxProvider>
                    <MathJaxFormula formula="$$5 \times \frac{1}{2} = ?$$" />
                </MathJaxProvider>
            </div>
            <div className="text-base md:text-lg">
                    Arithmetic
            </div>
            <div className="text-xs md:text-sm text-gray-500">
                Basic Arithmetic
            </div>
        </div>
        
        {/* option 2 */}
        <div onClick={()=>onselect(1)} className={`${data[step-1]==1?'border-yellow-500':'border-green-300'} flex flex-col items-center content-center p-3 border rounded mb-3`}>
            <div className="h-[60%]">
                <MathJaxProvider>
                    <MathJaxFormula formula="$$3x + 5 = 4$$" />
                </MathJaxProvider>
            </div>
            <div className="text-base md:text-lg">
                Basic Algebra
            </div>
            <div className="text-xs md:text-sm text-gray-500">
                Foundational
            </div>
        </div>
        
        {/* option 3 */}
        <div onClick={()=>onselect(2)} className={`${data[step-1]==2?'border-yellow-500':'border-green-300'} flex flex-col items-center content-center p-3 border rounded mb-3`}>
            <div className="">
                <MathJaxProvider>
                    <MathJaxFormula formula="$$x = \frac{\sqrt{3x-1}+(1+x)^2}{2a}$$" />
                </MathJaxProvider>
            </div>
            <div className="text-base md:text-lg">
                Intermediate Algebra
            </div>
            <div className="text-xs md:text-sm text-gray-500">
                Intermediate
            </div>
        </div>
        
        {/* option 4 */}
        <div onClick={()=>onselect(3)} className={`${data[step-1]==3?'border-yellow-500':'border-green-300'} flex flex-col items-center content-center p-3 border rounded mb-3`}>
            <div className="">
                <MathJaxProvider>
                    <MathJaxFormula formula="$$\int x^2dx = ?$$" />
                </MathJaxProvider>
            </div>
            <div className="text-base md:text-lg">
                Calculas
            </div>
            <div className="text-xs md:text-sm text-gray-500">
                Advanced
            </div>
        </div>
        </div>
        </div>
    
        {data[step-1]!=-1?
            <button className="text-xs md:text-base" onClick={next}>Continue</button>
        :<></>}
        </div>
        </>
    )
}

export default Level