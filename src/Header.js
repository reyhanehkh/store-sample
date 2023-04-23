import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';

function Header() {

     const [menu, setMenu] = useState(false);


     const toggleMenu = () => {
          setMenu(!menu);
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"
     }

  return (
    
    <header>
         <div className="cart-icon">
              <Link to="">
                    <FaShoppingBag />
              </Link>
         </div>
         <ul style={styleMenu}>
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/products">محصولات</Link></li>
              <li><Link to="/">درباره ما</Link></li>
              <li><Link to="/">تماس با ما</Link></li>
              <li><Link to="/form">ثبت نام</Link></li>
               <li><img src={Close} width="30" className="menu" alt="" onClick={toggleMenu} /></li>
         </ul>
         <div className="logo">
              <Link to="/">shopping</Link>
         </div>
         <div className="menu" onClick={toggleMenu}>
              <img src={Menu} width="30" alt="" />
         </div>
    </header>

  )
}

export default Header