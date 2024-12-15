import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import { faCartPlus, faRectangleList } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'./addproduct'} style={{ textDecoration:"none" }}>

        <div className="sidebar-item">
           <FontAwesomeIcon icon={faCartPlus}/>
           <p>Add Product</p>
        </div>

      </Link>
      <Link to={'./listproduct'} style={{ textDecoration:"none" }}>

        <div className="sidebar-item">
          <FontAwesomeIcon icon={faRectangleList}/>
          <p>Product list</p>
        </div>

      </Link>
    </div>
  )
}

export default Sidebar
