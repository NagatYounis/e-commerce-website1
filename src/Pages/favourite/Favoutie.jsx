import React, { use, useContext } from 'react'
import { CartContext } from '../../Components/context/cartconxt'
import Product from '../../Components/Slideproduct/Product'

const Favoutie = () => {
    const {favirouit} = useContext(CartContext)
  return (
    <div  className='fav-items' style={{marginTop: "150px"}}>
        <div className="container">
        <div className="top_slide">
          <h2>your favourate</h2>
          <p>
      
          </p>
        </div>

             {favirouit.length === 0 ? (
            <p>no fav products</p>

           ) :  
           <div className='products'>
{favirouit.map((fav)=>(
    <Product item={fav} key={fav.id}/>
))}
           </div>
           
           }
        </div>
     
    </div>
  )
}

export default Favoutie
