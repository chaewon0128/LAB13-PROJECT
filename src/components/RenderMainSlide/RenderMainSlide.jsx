import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './RenderMainSlide.css';
import SwiperCore, { A11y, Mousewheel, Keyboard } from 'swiper';
import RenderText from './RenderText';
import useReadData from '../../utils/firebase/firestore/useReadData';

SwiperCore.use([Mousewheel, A11y, Keyboard]);

export default function RenderMainSlide() {
  const { readData, data } = useReadData('image');
  const baseUrl = '../src/assets/images/';
  const rendingImg = useRef([]);
  const bannerImg = useRef([]);

  async function handleReadData() {
    await readData();
    // eslint-disable-next-line no-console
    console.log('read');
  }

  useEffect(() => {
    readData();
    rendingImg.current = data.filter(img => img.src.banner);
    bannerImg.current = rendingImg.current.slice(0, 4);
    console.log(data);
  },[]);

  const TITLE = '타잉에만 있는 재미';
  const BOLDTEXT = '오리지널 콘텐츠를 만나보세요!';
  const TEXT = '차별화된 웰메이드 오리지널 콘텐츠';

  return (
    <div className="mainSlide">
      <RenderText title={TITLE} boldText={BOLDTEXT} text={TEXT} />
      <div className="container">
        <Swiper
          style={{ height: '583px' }}
          slidesPerView="auto"
          spaceBetween={0}
          centeredSlides
          mousewheel
          keyboard={{
            enabled: true,
          }}
          modules={[Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {bannerImg.current.map(item => {
            return (
              <SwiperSlide
                key={item.id}
                style={{
                  marginLeft: '24px',
                }}
              >
                <img
                  src={`${baseUrl}${item.src.banner}.jpg`}
                  alt={`${item.name}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
