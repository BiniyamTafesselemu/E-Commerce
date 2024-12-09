import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <div className="cartitems-product">
                                 <img src={e.image} alt='' className="cartitems-product-icon" />
                                </div>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <FontAwesomeIcon className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} icon={faRemove} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    </div>
                    <div className="cartitems-promocode">
                        <p>Enter your promo code</p>
                        <div className="cartitems-promobox">
                            <input type='text' placeholder='promo code' />
                            <button>submit</button>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default CartItems;
