import React,{useEffect,useState} from 'react'
import Item from '../../Item/Item'
import './Trending.css'

const Trending = (props) => {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState(data);
    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://fakestoreapi.com/products?limit=5`;
            const response = await fetch(url);
            const resJson = await response.json();
            setData(resJson.main)
            setSearch(resJson)
        }
        fetchApi();
    },[])
  return (
    <div className='shop-category'>
        <h4>{props.heading}</h4>
      <div className='shopcategory-products'>
           {search.map((item,i)=>{
                return(
                    <Item key={i} id={item.id} name={item.title} image={item.image} price={item.price} />
                )
            })}
      </div>
    </div>
  )
}

export default Trending
