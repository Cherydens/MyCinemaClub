import { useState } from 'react';
import TrailerModal from 'components/TrailerModal/TrailerModal';
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

export default function HeroResolved({ dayTrend }) {
  const { id, title, vote_average, overview, backdrop_path } = dayTrend;
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  // const [showDetailsModal, setShowDetailsModal] = useState(false);

  const toggleTrailerModal = () => {
    setShowTrailerModal(prevState => !prevState);
  };

  // const toggleDetailsModal = () => {
  //   setShowDetailsModal(prevState => !prevState);
  // };

  return (
    <HeroResolvedContainer backgroundImg={backdrop_path}>
      <HeroInfoContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroStarRating>{renderStarRating(vote_average)}</HeroStarRating>
        <HeroFilmOverview>{overview}</HeroFilmOverview>
        <HeroBtnContainer>
          <PrimaryHeroBtn type="button" onClick={toggleTrailerModal}>
            Watch trailer
          </PrimaryHeroBtn>
          <SecondaryHeroBtn type="button">More details</SecondaryHeroBtn>
        </HeroBtnContainer>
      </HeroInfoContainer>
      {showTrailerModal && (
        <TrailerModal onClose={toggleTrailerModal} id={id} />
      )}
    </HeroResolvedContainer>
  );
}
