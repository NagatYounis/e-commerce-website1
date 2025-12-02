import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from '../Components/Slideproduct/Product';
import PageTranstion from '../Components/PageTranstion';
import ProductDetailsLoad from './productdetails/ProductDetailsLoad';

const SearchResylt = () => {
    const [result , setResult] = useState([]);
    const[loading,setLoad] = useState(true)
    const query = new URLSearchParams(useLocation().search).get("query")
 console.log(result)
 useEffect(()=>{

    const fetchData = async ()=>{
        try{
       const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await res.json();
        setResult(data.products || [])
    
    }catch(error){
            console.error(error)
        }
        finally{
            setLoad(false)
        }
    }
   if(query) fetchData();
 }, [query])
    return (
   <PageTranstion key={query}>
     <div className='category-pro' style={{marginTop: "150px"}}>
     {loading ?( <ProductDetailsLoad/>) :
   result.length > 0 ?  (
         <div className="container">
    <div className="top_slide">
          <h2>{query}</h2>
          <p>
         
          </p>
        </div>
      <div className="products">
        
        {result.map((el, index)=>(
          <Product  item={el} key={index}/>
        ))}
      </div>
    </div>
  
    ) : <div className="container">
        <p> no products found</p>
    </div>
     
     }
    </div>
 </PageTranstion>
  )
}

export default SearchResylt
