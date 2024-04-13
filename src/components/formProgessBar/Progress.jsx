import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Progress=({step,prev})=>{

    let progress=(step/5)*100
    return(
        <>
        <div className="flex justify-center items-center my-6">
            <FontAwesomeIcon className='hover:cursor-pointer' onClick={prev} icon={faChevronLeft}/>
            <div className="w-[80%] bg-gray-200 rounded-full h-1.5 ml-4">
                <div className="bg-green-600 h-1.5 rounded-full" style={{width:`${progress}%`}}></div>
            </div>
        </div>
        </>
    )
}

export default Progress