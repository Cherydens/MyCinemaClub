import HeroResolved from 'components/HeroResolved/HeroResolved';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { SlideStyled, SwiperStyled } from './Slider.styled';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider({ dayTrends }) {
  return (
    <SwiperStyled
      loop={true}
      spaceBetween={0}
      effect={'coverflow'}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 100,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.5,
      }}
      modules={[EffectCoverflow, Navigation, Pagination]}
    >
      {dayTrends.map(dayTrend => (
        <SlideStyled key={dayTrend.id}>
          <HeroResolved dayTrend={dayTrend} />
        </SlideStyled>
      ))}
    </SwiperStyled>
  );
}
