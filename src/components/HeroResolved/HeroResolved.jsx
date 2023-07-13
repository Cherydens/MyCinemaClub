import { useLockBodyScroll, useToggle } from 'react-use';
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
import DetailsModal from 'components/DetailsModal/DetailsModal';

export default function HeroResolved({
  dayTrend: { id, title, vote_average, overview, backdrop_path },
}) {
  const [showTrailerModal, setShowTrailerModal] = useToggle(false);
  const [showDetailsModal, setShowDetailsModal] = useToggle(false);

  useLockBodyScroll(showTrailerModal || showDetailsModal);

  return (
    <HeroResolvedContainer backgroundImg={backdrop_path}>
      <HeroInfoContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroStarRating>{renderStarRating(vote_average)}</HeroStarRating>
        <HeroFilmOverview>{overview}</HeroFilmOverview>
        <HeroBtnContainer>
          <PrimaryHeroBtn type="button" onClick={setShowTrailerModal}>
            Watch trailer
          </PrimaryHeroBtn>
          <SecondaryHeroBtn type="button" onClick={setShowDetailsModal}>
            More details
          </SecondaryHeroBtn>
        </HeroBtnContainer>
      </HeroInfoContainer>
      {showTrailerModal && (
        <TrailerModal onClose={setShowTrailerModal} id={id} />
      )}
      {showDetailsModal && (
        <DetailsModal onClose={setShowDetailsModal} id={id} />
      )}
    </HeroResolvedContainer>
  );
}
