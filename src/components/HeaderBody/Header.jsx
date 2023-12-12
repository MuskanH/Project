import React from 'react'
import "./Header.css"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Img1 from "../../assets/Rectangle 1.png"
import Img2 from "../../assets/Rectangle 2.png"
import LEFT from "../../assets/LEFT.png"
import RIGHT from "../../assets/RIGHT.png"

import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Header = () => {
    return (
        <header className='header'>
            <div className='paraBox'>
                <div className='heading'>
                    <h1>Vyas And Sons</h1> <span><p className='work'>Murti Art</p></span>
                </div>
                <p className='content'>Established in the year 1956, at Jaipur (Rajasthan, India), we, Vyas And Sons Murti Art, introduce ourselves as one of the leading Manufacturing and Exporting of different kinds of Statues and Busts.</p>
                <button className='readMore buttons'>Read More <TrendingFlatIcon className='arrow' /></button> <span><button className='contactUs buttons'>Contact Us <TrendingFlatIcon className='arrow' /></button></span>
            </div>

            <div className='navigate'>
                <img src={LEFT} className='left' /><span><p className='murtiName'>Durga Marble Statues</p></span><span><img src={RIGHT} className='right' /></span>
            </div>

            <Swiper className='slider'
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>

                <SwiperSlide> <img src={Img1} className='img1' /></SwiperSlide>
                <SwiperSlide>  <img src={Img2} className='img2' /></SwiperSlide>
            </Swiper>

        </header>
    )
}

export default Header
