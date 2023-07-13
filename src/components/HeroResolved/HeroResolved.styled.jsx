import styled from '@emotion/styled';

export const HeroResolvedContainer = styled.div`
  padding-left: 135px;
  padding-top: 118px;
  min-height: 100%;
  width: 100%;
  background: linear-gradient(77deg, #111 18%, rgba(17, 17, 17, 0) 100%),
    url(${prop => 'https://image.tmdb.org/t/p/w1280/' + prop.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 220px;
`;

export const HeroInfoContainer = styled.div`
  width: 670px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const HeroTitle = styled.h2`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: left;
`;

export const HeroStarRating = styled.div`
  display: flex;
  justify-content: start;
  text-align: start;
  align-items: center;
  gap: 4px;
  max-height: 24px;
  margin-bottom: 28px;
  img {
    max-width: 24px;
  }
`;
export const HeroFilmOverview = styled.p`
  width: 370px;
  text-align: start;
  color: #f8f8f8;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;

  margin-bottom: 36px;
`;

export const HeroBtnContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const PrimaryHeroBtn = styled.button`
  padding: 12px 24px;
  border-radius: 74px;
  background: linear-gradient(145deg, #ffc226 0%, #f84119 100%);
  color: #111;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
`;

export const SecondaryHeroBtn = styled.button`
  padding: 12px 24px;
  border-radius: 74px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
