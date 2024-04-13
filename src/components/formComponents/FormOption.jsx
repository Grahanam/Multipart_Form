


const FormOption=({heading,title,img,onselect,value,select})=>{
    return(
        <>
            <div onClick={()=>onselect(value)} className={`${select==value?'border-yellow-500':'border-green-300'} hover:cursor-pointer flex items-center content-center p-3 border rounded mb-3`}>
                <div className="h-10 w-10 mr-4">
                    <img src={img} alt="role" />
                </div>
                <div>
                    {heading}<span className="text-gray-500"> {title}</span>
                </div>
            </div>
        </>
    )
}

export default FormOption