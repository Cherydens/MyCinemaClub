import { renderStarRating } from 'services/renderStarRating';
import {
  HeroBtnContainer,
  HeroFilmOverview,
  HeroInfoContainer,
  HeroResolvedContainer,
  HeroStarRating,
  HeroTitle,
  PrimaryHeroBtn,
  SecondaryHeroBtn,
} from './HeroResolved.styled';

const HeroResolved = ({ dayTrend }) => {
  const { title, vote_average, overview, backdrop_path } = dayTrend;

  return (
    <HeroResolvedContainer backgroundImg={backdrop_path}>
      <HeroInfoContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroStarRating>{renderStarRating(vote_average)}</HeroStarRating>
        <HeroFilmOverview>{overview}</HeroFilmOverview>
        <HeroBtnContainer>
          <PrimaryHeroBtn type="button">Watch trailer</PrimaryHeroBtn>
          <SecondaryHeroBtn type="button">More details</SecondaryHeroBtn>
        </HeroBtnContainer>
      </HeroInfoContainer>
    </HeroResolvedContainer>
  );
};

export default HeroResolved;
