import {
  Amount,
  Cart,
  CartButton,
  HeaderStyled,
  LogoStyled,
  NavBarLink,
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
import { useEffect } from "react";
import Popup from "../../shared/ui/popup";

const Header = observer(() => {
  useEffect(() => {
    if (cartStore.isCartPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartStore.isCartPopupOpen]);

  return (
    <>
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
            <CartButton onClick={() => cartStore.toggleCartPopup()}>
              <img src={cartIcon} alt='cart icon' />
            </CartButton>
            <Amount>{cartStore.totalAmount} ₽</Amount>
          </Cart>
          <NavBarLink to='/favorites'>
            <img src={heartIcon} alt='heart icon' width={20} height={20} />
          </NavBarLink>
          <NavBarLink to='/profile'>
            <img src={profileIcon} alt='heart icon' />
          </NavBarLink>
        </NavigationBar>
      </HeaderStyled>
      {cartStore.isCartPopupOpen && <Popup />}
    </>
  );
});

export default Header;
