import logoIcon from '../../images/logo.png';
import { LogoImage, LogoText, LogoType } from './Logo.styled';

const Logo = ({ children }) => {
  return (
    <LogoType href="#">
      <LogoImage src={logoIcon} alt="Logo" />
      <LogoText>{children}</LogoText>
    </LogoType>
  );
};

export default Logo;
