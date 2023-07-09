import {
  HeroBtn,
  HeroDescription,
  HeroRejectedContainer,
  HeroRejectedInfoContainer,
  HeroRejectedTitle,
} from './HeroRejected.styled';

const HeroRejected = () => {
  return (
    <HeroRejectedContainer>
      <HeroRejectedInfoContainer>
        <HeroRejectedTitle>Let’s Make Your Own Cinema</HeroRejectedTitle>
        <HeroDescription>
          Is a guide to creating a personalized movie theater experience. You'll
          need a projector, screen, and speakers. Decorate your space, choose
          your films, and stock up on snacks for the full experience.
        </HeroDescription>
        <HeroBtn type="button">Get Started</HeroBtn>
      </HeroRejectedInfoContainer>
    </HeroRejectedContainer>
  );
};

export default HeroRejected;
