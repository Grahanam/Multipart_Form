
import { MathJaxProvider, MathJaxFormula } from 'mathjax3-react';
import { useEffect } from 'react';

const FormSqrOption=({heading,title,img,onselect,value,select})=>{

    return(
        <>
            <div onClick={()=>onselect(value)} className={`${select==value?'border-yellow-500':'border-green-300'} hover:cursor-pointer flex flex-row lg:flex-row text-xs md:text-sm items-center content-center p-2 border rounded mb-3`}>
                <div className=' font-bold text-left p-2'>
                    {heading}
                    <span className='text-gray-500'> {title}</span>
                </div>
                <div className="h-24 w-24 flex items-center justify-center lg:mr-2">
                    <img className=''  src={img} alt="role" />
                </div>
            </div>
        </>
    )
}

export default FormSqrOption