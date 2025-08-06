import styled from "styled-components";
import { GoArrowDownRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { CiLocationArrow1 } from "react-icons/ci";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ProductsCard } from "../category-card/product-card";

export const AllCategoryList=()=>{
    return(
    <AllCaregoryWrapper>


        <div className="container all-category-list">
            <h2 className="categories-title">Popular Brand Desgin & Products</h2>
      <Swiper  
         breakpoints={{
        0: {
          slidesPerView: 1, // For <767px
        },
        767: {
          slidesPerView: 6, // For ≥767px
        },
      }}
       spaceBetween={20}
 navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide>
       <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide>
          <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
         <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
          <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
           <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
           <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
          <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
           <SwiperSlide>
               <div className="category-card">
                <img src="curtain-category.jpg" className="category-img" alt="product-image"></img>
                <p className="arrow"><GoArrowDownRight /></p>
                <span className="cat-heading">Curtains</span>
            </div>
        </SwiperSlide> 
      </Swiper>
      <ProductsCard/>
        <a className="view-all-cat">View all <CiLocationArrow1 /></a>
        </div>
    </AllCaregoryWrapper>
    )
}
export const AllCaregoryWrapper=styled.section`
padding: 40px 0px ;
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
  top: 40%;
  color: #000;

  &::after {
    font-size: 20px;
    font-weight: bold;
  }
}

.swiper-button-next{
    right: 2%;
}
.swiper-button-prev{
    left: 2%;
}

.view-all-cat{background: #bb9210;
    padding: 7px 107px;
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    svg{
          color: #fff;
    font-size: 20px;
    font-weight: bolder;
    }
  }
.all-category-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
.categories-title{
    font-size: 40px;
    font-weight: 600;
}
.category-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: relative;

  .category-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out; // Smooth transition
  }

  .arrow {
    background-color: #B28B5F;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    color: #fff;
    font-size: 22px;
    font-weight: 900;
    position: absolute;
    top: 60%;
    right: 30px;
    box-shadow: 1px 3px 0px 1px black;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s ease-in-out, visibility 0.3s ease-in-out;
  }
.cat-heading{
    font-size: 19px;
    font-weight: 600;
    position: relative;
    &::before{
    content: '';
    color: red;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
}

  }

  // Hover effect

  &:hover {
    .category-img {
      transform: scale(1.05);
    }
    .arrow {
      opacity: 1;
      visibility: visible;
    }
  }
}
`;