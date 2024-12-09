import React, { useContext } from 'react'
import './ProductDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;

    const{addToCart} = useContext(ShopContext)


  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt='bimhda'/>
            <img src={product.image} alt='bimhda'/>
            <img src={product.image} alt='bimhda'/>
            <img src={product.image} alt='bimhda'/>
        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            dgfxfx fdxrgcxfdresf dsrsrr ers shd esyrd tr5e tders fdess
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-category"><span>Category </span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-category"><span>Tags </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
