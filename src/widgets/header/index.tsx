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
import { cartStore } from "../../store/cartStore";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <Link to='/'>
          <img src={logo} alt='logo icon' />
        </Link>
        <div>
          <StyledLink to='/'>React goods</StyledLink>
          <StyledSubLink>Магазин лучших товаров</StyledSubLink>
        </div>
      </LogoStyled>
      <NavigationBar>
        <Cart>
          <Link to='/cart'>
            <img src={cartIcon} alt='cart icon' />
          </Link>
          <Amount>{cartStore.totalAmount} ₽</Amount>
        </Cart>
        <Link to='/favorites'>
          <img src={heartIcon} alt='heart icon' width={20} height={20} />
        </Link>
        <Link to='/profile'>
          <img src={profileIcon} alt='heart icon' />
        </Link>
      </NavigationBar>
    </HeaderStyled>
  );
});

export default Header;
