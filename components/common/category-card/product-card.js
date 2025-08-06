import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { FaRegHeart } from "react-icons/fa";


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import styled from "styled-components"
export const ProductsCard=()=>{
    return(
      <ProductsCardWrapper>
<div className='container'>
          <Swiper     
        breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}

       spaceBetween={2}
   navigation={true} modules={[Navigation]} className="mySwiper">
<div>
     <SwiperSlide>
   <Card/>
   </SwiperSlide>
    <SwiperSlide>
   <Card/>
   </SwiperSlide> 
   <SwiperSlide>
   <Card/>
   </SwiperSlide> 
   <SwiperSlide>
   <Card/>
   </SwiperSlide> 
   <SwiperSlide>
   <Card/>
   </SwiperSlide> 
</div>

      </Swiper>
  </div>
      </ProductsCardWrapper>

    )
}
const getColor = (index) => {
  const colors = ["#62a237c9", "#f4de36ff", "#2196f3"];
  return colors[index];
};

export  const Card=()=>{
    const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };
    return(
  <CardWrapper>
<div className="card">
      <div className="image-container">
        <img src="card-image.jpg" className="card-image" alt="Product" />

        <div className="overlay">
       
          <div className="sizes">
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
             <button className="quick-add">Quick Add</button>
          <div className="wishlist">
            <FaRegHeart />
          </div>
        </div>
      </div>

      <h4 className="card-title">Dontella</h4>
      <p className="card-subdesc">Sample jewellery and Accessories</p>
      <p className="card-amount">$4545</p>
 <div className="color-list">
      {[0, 1, 2].map((item, index) => (
        <span
          key={index}
          className={selectedColor === index ? "selected" : ""}
          onClick={() => handleColorClick(index)}
        >
          <i style={{ backgroundColor: getColor(index) }}></i>
        </span>
      ))}
    </div>

      <div className="active-offer">10% off</div>
    </div>
  </CardWrapper>
    )
}
export const ProductsCardWrapper=styled.section`
width: 100%;
.mySwiper {
  width: 100%;
  height: 250px;
  position: relative;
  background: none !important;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  color: #000 !important;
    padding: 10px 0px !important;

}

.swiper-button-disabled{
    display: none !important;
}
.swiper-button-prev,
.swiper-button-next {
  z-index: 10;
  background: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 35%;
  color: #000;
border: 1px solid black;
  &::after {
    font-size: 20px;
    font-weight: bold;
  }
}

.swiper-button-next{
    right: 1%;
}
.swiper-button-prev{
    left: 1%;
}
`;
export const CardWrapper=styled.section`
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;
position: relative;
.card{
  position: relative;
}
.card-image{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-title{
  margin-top: 10px;
}
.card-title,.card-amount{
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
}
.card-subdesc{
   font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #444444ff;
}
.color-list{
  display: flex;
  gap: 10px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  span{
    border: 1px solid black;
    border-radius: 50%;
    i{
  color: red;
    border-radius: 50%;

    width: 22px;
    height: 22px;
    background: red;
    display: block;
    margin:2px
    }

  }
}
.color-list {
  display: flex;
  gap: 10px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
}

.color-list span {
  border:1px solid #8989898c;
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
  transition: border 0.2s ease;
}

.color-list span.selected {
  border: 1px solid #000;
}

.color-list span i {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: block;
}
.active-offer{
      background-color: #B28B5F;
    padding: 2px 13px;
    border-bottom-left-radius: 13px;
    border-top-left-radius: 13px;
    position: absolute;
  top: 8px;
    right: -13px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    &::before{
   content: "";
    position: absolute;
    top: 26px;
    /* left: 0; */
    right: 0;
    width: 14px;
    height: 15px;
    /* opacity: 0.2; */
    /* border-radius: 13px; */
    border-bottom-right-radius: 13px;
    background: linear-gradient(292deg, #B28B5F, transparent);
    }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: rgba(20, 20, 20, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  gap: 20px;
  transition: opacity 0.3s ease;
  border-radius: 6px;
}

.image-container:hover .overlay {
  opacity: 1;
}

.overlay .quick-add {
background: #fff;
    border: none;
    padding: 8px 16px;
    /* border-radius: 20px; */
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 4px;
    width: 96%;
}

.overlay .sizes {
  display: flex;
  gap: 8px;
}

.overlay .sizes span {
  background: #fff;
  padding: 4px 10px;
  border-radius: 34%;
  font-size: 12px;
  cursor: pointer;
}

.overlay .wishlist {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
.image-container:hover .overlay {
  opacity: 1;
}

`;