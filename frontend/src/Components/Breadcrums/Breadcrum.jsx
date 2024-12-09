import React from 'react'
import './Breadcrum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      Home <FontAwesomeIcon icon={faArrowRightLong}/>SHOP <FontAwesomeIcon icon={faArrowRight}/> {product.category} <FontAwesomeIcon icon={faArrowRight} /> {product.name}
    </div>
  )
}

export default Breadcrum
