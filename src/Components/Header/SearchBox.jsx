import React, { useEffect, useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [serchInput, sectSearchInput] = useState("");
  const navigat = useNavigate();
  const [sugest , setSugest] = useState([])
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(serchInput.trim()){
    navigat(`/search?query=${encodeURIComponent(serchInput.trim())}`);

    }
    setSugest([])
  };

  useEffect(()=>{


    if(!serchInput.trim()){
        setSugest([])
        return;
    }
    const fetchsuggestion = async ()=>{
             try {
       const res = await fetch(`https://dummyjson.com/products/search?q=${serchInput}`)
        const data = await res.json();
        setSugest(data.products.slice(0 , 5) || [])
    
    }catch(error){
        
        console.error(error);
        setSugest([])
    }
    
}
const timmm = setTimeout(() => {
  

    fetchsuggestion();
}, 300);
console.log(sugest)
return ()=> clearTimeout(timmm)
  },[serchInput])

  useEffect(()=>{
    setSugest([])
    sectSearchInput('')
  },[location])
  return (
    <div className="sarch_container">
      <form
        onSubmit={handleSubmit}
        className="search_
        box"
      >
        <input
          type="text"
          name="search"
          value={serchInput}
          id="search"
          autoComplete="off"
          placeholder="serch for product"
          onChange={(e) => sectSearchInput(e.target.value)}
        />
        <button type="submit">
          <PiMagnifyingGlassLight />
        </button>
      </form>

      {sugest.length > 0 && (
        <ul className="suggest_list">
            {sugest.map((item)=>(
<Link to={`/products/${item.id}`}>
                <li key={item.id}>
                <img src={item.images[0]} alt="" />
                <span>{item.title}</span></li></Link>
            )
            )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
