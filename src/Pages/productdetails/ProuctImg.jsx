import React from 'react'

const ProuctImg = ({pDetails}) => {
  return (
   <div className="pro-img">
            <div className="big-img">
                <img id='big-img' src={pDetails.images[0]} alt={pDetails.title}/>
            </div>
            <div className="smal-img">
                {pDetails.images.map((e , index)=>(
                    <img key={index} src={e} alt="" onClick={()=> document.getElementById('big-img').src= e}/>
                ))}
            </div>
        </div>
  )
}

export default ProuctImg
