import {
  Amount,
  Cart,
  HeaderStyled,
  LogoStyled,
  NavigationBar,
  StyledLink,
  StyledSubLink,
} from "./styles";
import logo from "../../shared/assets/icons/logo.png";
import cartIcon from "../../shared/assets/icons/cart.svg";
import heartIcon from "../../shared/assets/icons/heart.svg";
import profileIcon from "../../shared/assets/icons/profile.svg";

import { Link } from "@tanstack/react-router";

const Header = () => {
  const amount: number = 12;
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={logo} alt='logo icon' />
        <div>
          <StyledLink to='/'>React sneakers</StyledLink>
          <StyledSubLink>Магазин лучших кроссовок</StyledSubLink>
        </div>
      </LogoStyled>
      <NavigationBar>
        <Cart>
          <Link to='/cart '>
            <img src={cartIcon} alt='cart icon' />
          </Link>
          <Amount>{amount} руб.</Amount>
        </Cart>
        <Link to='/favorites '>
          <img src={heartIcon} alt='heart icon' width={20} height={20} />
        </Link>
        <Link to='/profile '>
          <img src={profileIcon} alt='heart icon' />
        </Link>
      </NavigationBar>
    </HeaderStyled>
  );
};

export default Header;
