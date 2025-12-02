import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./header.css";
const HeaderBottom = () => {
  const [dataa, setdata] = useState([]);
  const [category , setcategory]= useState(false);
  const location = useLocation();
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    { title: "About", link: "/about" },
    {
      title: "Accesories",
      link: "/accessories",
    },
    { title: "Blog", link: "/blog" },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

useEffect(()=>{
  setcategory(false)

},[location])
  console.log(dataa);
  return (
    <div className="bottom">
      <div className="container">
        <div className="nav">
          <div className="category-nav">
            <div className="catgory_btn" onClick={()=> setcategory(!category)}>
              <IoMenu />
              <p>Browse category</p>
              <MdOutlineArrowDropDown />
              <div className={`category_nav_list ${category ? "active" : ""}` }>
                {dataa.map((Category, index) => (
                  <Link to={`category/${Category.slug}`} key={index}>
                    {Category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="nav-links"  >
            {navLinks.map((e) => (
              <li className={location.pathname === e.link ? "active" :''} >
              
                <Link to={e.link}>{e.title}</Link>
              </li>
            ))}
          </div>
        </div>

        <div className="sign-icons">
          <Link to="/">
            <FaUser />
          </Link>
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
