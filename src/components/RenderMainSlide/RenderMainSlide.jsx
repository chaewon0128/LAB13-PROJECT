import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './RenderMainSlide.css';
import SwiperCore, { A11y, Mousewheel } from 'swiper';
import RenderText from './RenderText';
import banner01 from '../../assets/images/lovecatcher_03.jpg';

SwiperCore.use([Mousewheel, A11y]);

export default function RenderMainSlide() {
  const TITLE = '티빙에만 있는 재미';
  const BOLDTEXT = '오리지널 콘텐츠를 만나보세요!';
  const TEXT = '차별화된 웰메이드 오리지널 콘텐츠';

  return (
    <div className="mainSlide">
      <RenderText title={TITLE} boldText={BOLDTEXT} text={TEXT} />
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          centeredSlides
          mousewheel
          modules={[Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner01} alt="이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner01} alt="이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner01} alt="이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner01} alt="이미지" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
