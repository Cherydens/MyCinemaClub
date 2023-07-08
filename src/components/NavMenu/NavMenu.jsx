import { NavMenuBtn, NavMenuContainer } from './NavMenu.styled';

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <NavMenuBtn href="#">home</NavMenuBtn>
      <NavMenuBtn href="#">catalog</NavMenuBtn>
      <NavMenuBtn href="#">my library</NavMenuBtn>
    </NavMenuContainer>
  );
};

export default NavMenu;
