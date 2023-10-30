import React, { useContext} from 'react'
import './ShopCategory.css'
import Item from '../Item/Item'
import { ShopContext } from '../Context/ShopContext'
import ImageSlider from '../ImageSlider/ImageSlider'

const ShopCategory = (props) => {
    const {search,selectedPrice,handlePriceChange} = useContext(ShopContext);
    console.log(search)

  return (
    <div className='shop-category'>
      <ImageSlider pages={props.page} />
      <div className='shopcategory-indexSort'>
         <div>Showing Products</div>
        <div className='shopcategory-sort'>
          <select value={selectedPrice} onChange={handlePriceChange}>
              <option value={0}>All</option>
              <option value={50}>Price Above $50</option>
              <option  value={20}>Sort Below $20</option>
         </select>
        </div>
      </div>
      <div className='shopcategory-products'>
        {search.map((item,i)=>{
          if (props.category === item.category){
            return(<div>
              <Item key={i} id={item.id} name={item.title} image={item.image} price={item.price} />
            </div>
               )
          } else{
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
