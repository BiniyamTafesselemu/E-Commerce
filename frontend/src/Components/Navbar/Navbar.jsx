import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)
  const menuRef=useRef()

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
  }


  return (
    <div className='navbar'>
      <div className="nav-logo">
      <FontAwesomeIcon style={{ color:"red", fontSize:"26px" }} icon={faBagShopping} />
        <p>BIMHDA</p>
      </div>
      <FontAwesomeIcon onClick={dropdown_toggle} icon={faArrowDown} className='nav-dropdown' />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none" }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:"none" }} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:"none" }} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:"none" }} to='/kidS'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar
