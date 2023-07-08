import Logo from 'components/Logo/Logo';
import { Component } from 'react';
import { HeaderContainer } from './Header.styled';
import NavMenu from 'components/NavMenu/NavMenu';

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderContainer>
        <Logo>Cinemania</Logo>
        <NavMenu />
      </HeaderContainer>
    );
  }
}

export default Header;
