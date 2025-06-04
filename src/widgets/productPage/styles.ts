import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

export const ProductModel = styled.h1``;

export const ProductDescription = styled.p`
  margin: 30px 0;
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const ProductToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background-color: #f7f7f7;
  border-radius: 20px;
`;

export const StyledP = styled.p`
  margin: 30px 0;
  color: #000;
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  padding: 0 30px;
  font-weight: 700;
  font-size: 18px;
`;

export const Description = styled.div`
  display: flex;
`;
