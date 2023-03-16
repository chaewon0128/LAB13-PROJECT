import { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './LandingMainSlide.css';
import SwiperCore, { A11y, Mousewheel, Keyboard } from 'swiper';
import { atom, useRecoilState } from 'recoil';
import useReadData from '../../utils/firebase/firestore/useReadData';
import LandingSlideTitle from './LandingSlideTitle';

SwiperCore.use([Mousewheel, A11y, Keyboard]);

const localStorageEffect = key => {
  return ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    } else {
      return undefined;
    }
    onSet((newValue, _, isRest) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
};

const imageState = atom({
  key: 'imageState',
  default: null,
  effects: [localStorageEffect('imageState')],
});

export default function LandingMainSlide() {
  const [images, setImages] = useRecoilState(imageState);
  const { readData, data } = useReadData('image');
  const baseUrl = '../src/assets/images/';
  const landingImg = useRef([]);
  const bannerImg = useRef([]);

  useLayoutEffect(() => {
    (async () => {
      if (!data && !images) {
        await readData();
        setImages(data);
          console.log(images);
      }
    })();
  }, [data, images, readData, setImages]);


  const TITLE = '타잉에만 있는 재미';
  const BOLDTEXT = '오리지널 콘텐츠를 만나보세요!';
  const TEXT = '차별화된 웰메이드 오리지널 콘텐츠';

  return (
    <div className="mainSlide">
      <LandingSlideTitle title={TITLE} boldText={BOLDTEXT} text={TEXT} />
      <div className="container">
        <Swiper
          style={{ height: '583px' }}
          slidesPerView="auto"
          spaceBetween={0}
          centeredSlides
          mousewheel
          releaseOnEdge
          // 마지막 슬라이더에서 스크롤 고정 해제
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
