import './Navbar.css';  
import p2_img from '../../assets/blackC.jpg';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAngleDown, faBagShopping } from '@fortawesome/free-solid-svg-icons';  

const Navbar = () => {  
  return (  
    <div className='navbar'>  
      <div className='icon-container'>  
        <FontAwesomeIcon style={{ color: "red", fontSize: "26px" }} icon={faBagShopping} />  
        <div className='left-logo'>  
          <h1>BIMDA</h1>  
          <p>Admin Panel</p>  
        </div>  
      </div>  
      <div className="profile-container">  
        <img src={p2_img} alt="Profile" className="nav-profile" />  
        <FontAwesomeIcon icon={faAngleDown} className="down-arrow" />  
      </div>  
    </div>  
  );  
}  

export default Navbar;