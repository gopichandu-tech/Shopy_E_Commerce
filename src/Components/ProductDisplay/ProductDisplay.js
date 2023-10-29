import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img'><img className='productdisplay-main-img' src={product.image} alt=''/></div>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-left-buttons'>
                <button className='add-to-cart' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <Link to='/buynow'><button className='buy-now' onClick={()=>{addToCart(product.id)}}>BUY NOW</button></Link>
            </div>
            {/* <div className='productdisplay-img'><img className='productdisplay-main-img' src={product.image} alt=''/></div> */}
        </div>
        <div className='productdisplay-right'>
            <div className='productdisplay-toppart'>
                <div className='product-title'>{product.title}</div>
                <div className='productdisplay-reviews'>
                    <span id='rating'>4.4 ✩</span> 5,598 Ratings & 412 Reviews
                </div>
                <div className='productdisplay-price'>
                <span className='new-price'>${(50 * product.price) / 100}</span> <span className='old-price'>${product.price}</span> <span className='discount'>50% off</span>
                </div>
            </div>
            

            <div className='productdisplay-avaliable-offers'>
                <div className='title'>Avaliable Offers</div>
                <div className='offers'><span id='bank'>Bank Offer</span> 10% off on Kotak Bank Credit Card</div>
                <div className='offers'><span id='bank'>Bank Offer</span> 10% off on RBL Bank Credit Card</div>
                <div className='offers'><span id='bank'>Bank Offer</span> 10% off on SBI Credit Card</div>
                <div className='offers'><span id='bank'>Special PriceGet</span> extra 5% off (price inclusive of cashback/coupon)</div>
            </div>
            <div className='productdisplay-right-description'>
                <div className='description-title'>Description</div>
                <div className='description-information'>{product.description}</div>
            </div>
            <div className='productdisplay-right-size'>
                <div className='select-title'>Select Size</div>
                <div className='productdislay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDisplay
