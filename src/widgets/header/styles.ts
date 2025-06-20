import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4e576a;
  padding: 65px 65px 44px 65px;
`;

export const LogoStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StyledSubLink = styled.p`
  font-size: 14px;
  color: #d1d6e0;
`;

export const NavigationBar = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Cart = styled.div`
  display: flex;
  gap: 10px;

  &:hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.7;
  }
`;

export const NavBarLink = styled(Link)`
  &:hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.7;
  }
`;

export const Amount = styled.p`
  color: #d1d6e0;
  font-weight: 600;
  font-size: 14px;
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
