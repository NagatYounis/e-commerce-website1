import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Slideproduct/Heroslider'
import Slideproduct from '../../Components/Slideproduct/Slideproduct'
import ProductDetailsLoad from '../productdetails/ProductDetailsLoad'
import PageTranstion from '../../Components/PageTranstion'

const Home = () => {
  const[products , setproducts]= useState({})
  const[loading , setloading]= useState(true)
  const category =[
  "laptops",
  "mobile-accessories",
  "motorcycle",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
 
]
useEffect(()=>{
  const fetchresults = async ()=>{
 try{
const result = await Promise.all(
  category.map(async (category)=>{
    const res = await fetch(`https://dummyjson.com/products/category/${category}`)
      const data = await res.json();
      console.log(data.products)
      return {[category] : data.products}
  })
)
const productData = Object.assign({}, ...result)
setproducts(productData)
console.log(productData);
 }catch(error){
 console.error("error fetched" , error);
  (error)
 }finally{
  setloading(false)
 }
  }
  fetchresults();
}, [])
console.log(products["tablets"])
  return (
<PageTranstion>
      <div>
      <Hero/>


      {loading ? <ProductDetailsLoad/> :
            category.map((cat)=>(
  <Slideproduct  key={cat} data={products[cat]} title={cat.replace("-" , " ")}/>
      ))
      }

    
     
    </div>
</PageTranstion>
  )
}

export default Home
