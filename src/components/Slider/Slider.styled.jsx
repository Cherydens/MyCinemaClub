import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-button-prev,
  .swiper-button-next {
    color: #f87719;
  }

  .swiper-pagination-bullet {
    background-color: #ffffff;
  }
  .swiper-pagination-bullet-active-main {
    background-color: #f87719;
  }
`;

export const SlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;
