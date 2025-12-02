

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FaStar , FaStarHalf } from "react-icons/fa";
import './details.css'
import { CiShoppingCart } from 'react-icons/ci';
import Slideproduct from '../../Components/Slideproduct/Slideproduct';
import ProductDetailsLoading from './ProductDetailsLoading';
import ProuctImg from './ProuctImg';
import ProductCont from './ProductCont';
import PageTranstion from '../../Components/PageTranstion';
const ProductDetails = () => {

    const {id} = useParams();


    const [pDetails , setpdetails]= useState(null);
    const [load , setload] = useState(true)
const [relate,setRelate] = useState([]);
const [loadpro,setLoadpro]= useState(true)
    useEffect(()=>{
 const proDetails = async ()=>{
    try{

        const result = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await result.json();
 setpdetails(data);
 setload(false)
    }catch(error){
        console.error(error)
    }
 }
 proDetails();
    },[id]);

    useEffect(()=>{
            if(!pDetails) return   
    fetch(`https://dummyjson.com/products/category/${pDetails.category}`)
    .then( res => res.json())
    .then((data)=>{
setRelate(data.products
);
    }).catch((error)=> console.error(error))
    .finally(()=>setLoadpro(false))

    
    
 } ,[pDetails?.category])

// console.log(pDetails)
// console.log(relate.products
// )
    if(load) return <ProductDetailsLoading/>
    if(!pDetails ) return <P> product not found</P>


  return (
<PageTranstion key={id}>
   <div>
      <div className='pro-item'>
    <div className="container">
       <ProuctImg pDetails={pDetails}/>
      <ProductCont pDetails={pDetails}/>
    </div>
    </div>

  {
    loadpro ? <p>loading.. </p> :  <Slideproduct key={pDetails.category} data={relate} title={pDetails.category.replace('-', ' ') }/>

  }
  </div> 
</PageTranstion>
  )
}


export default ProductDetails
