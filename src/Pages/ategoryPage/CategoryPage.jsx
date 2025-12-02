import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../Components/Slideproduct/Product';
import './cat.css'
import PageTranstion from '../../Components/PageTranstion';
const CategoryPage = () => {
    const {category} = useParams();
    const [productCat , setProCat]= useState([]);
console.log(category)
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${category}`)
.then(res => res.json())
.then((data) =>{
    setProCat(data.products)
});
    },[category])
    console.log(productCat)
  return (
 <PageTranstion key={category}>
     <div className='category-pro' style={{marginTop: "150px"}}>
    <div className="container">
    <div className="top_slide">
          <h2>{category} : {productCat.length}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            officiis.
          </p>
        </div>
      <div className="products">
        
        {productCat.map((el, index)=>(
          <Product item={el} key={index}/>
        ))}
      </div>
    </div>
    </div>
 </PageTranstion>
  )
}

export default CategoryPage
