import React, { useState } from 'react'
import './ImageSlider.css'
import left_arrow from '../../Assets/left_arrow.png'
import right_arrow from'../../Assets/right_arrow.png'
import Banners from '../Data/Banners'

const ImageSlider = (props) => {
    const [slide,setSlide] = useState(0);
    let filteredUsers = [];
    for(let i=0; i<Banners.length; i++){
        if(Banners[i].category === props.pages){
            filteredUsers = [...filteredUsers,Banners[i]];
        }
    }

    const nextSlide = () =>{
        setSlide(slide === filteredUsers.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? filteredUsers.length - 1 : slide - 1);
      };

  return (
    <div className='imageslider'>
        <img onClick={prevSlide} src={left_arrow} className='arrow left-arrow' alt='left arrow'/>
        {filteredUsers.map((item,idx) =>{
            return(
                <img
                    src={item.image}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            );
        })}
        <img onClick={nextSlide} src={right_arrow} className='arrow right-arrow' alt='right arrow'/>
      
    </div>
  )
}

export default ImageSlider
