import React, { useContext,useState,useEffect } from 'react'
import './ShopCategory.css'
import Item from '../Item/Item'
import sort from '../../Assets/dropdown_icon.png'
import arrow_up from '../../Assets/arrow-up.png'
import arrow_down from '../../Assets/arrow-down.png'
import { ShopContext } from '../Context/ShopContext'
import ImageSlider from '../ImageSlider/ImageSlider'

const ShopCategory = (props) => {
    const {search,sortBy} = useContext(ShopContext);
    const [click, setCLick] = useState(true);
    console.log(search)

  return (
    <div className='shop-category'>
      <ImageSlider pages={props.page} />
      <div className='shopcategory-indexSort'>
         <div>Showing Products</div>
        <div className='shopcategory-sort'>
          Sort by <img src={click ? arrow_down : arrow_up} alt='sort' onClick={()=>setCLick(!click)}/>
          <div className={click ? 'sort-by-category-hide' : 'sort-by-category-display'}>
            <div className='category' onClick={()=>sortBy()}>All</div>
            <div className='category' onClick={()=>sortBy()}>Price Above $50</div>
            <div className='category' onClick={()=>sortBy()}>Price Below $20</div>
          </div>
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
