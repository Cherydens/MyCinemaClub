import styled from '@emotion/styled';

import heroBGImage from '../../images/hero-bg.jpg';

export const HeroRejectedContainer = styled.div`
  padding-left: 32px;
  padding-top: 169px;
  min-height: 100%;
  width: 100%;
  background: linear-gradient(77deg, #111 18%, rgba(17, 17, 17, 0) 100%),
    url(${heroBGImage});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 220px;
`;

export const HeroRejectedInfoContainer = styled.div`
  width: 490px;
`;

export const HeroRejectedTitle = styled.h2`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 16px;
  font-style: normal;
`;

export const HeroDescription = styled.p`
  width: 100%;
  color: #f8f8f8;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const HeroBtn = styled.button`
  padding: 12px 24px;
  border-radius: 74px;
  background: linear-gradient(145deg, #ffc226 0%, #f84119 100%);
  color: #111;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
