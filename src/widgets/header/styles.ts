import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding: 65px 65px 44px 65px;
`;

export const LogoStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StyledSubLink = styled.p`
  font-size: 14px;
  color: #9d9d9d;
`;

export const NavigationBar = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Cart = styled.div`
  display: flex;
  gap: 10px;
`;

export const Amount = styled.p`
  color: #5c5c5c;
  font-weight: 600;
  font-size: 14px;
`;
