import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  padding: 30px;
  width: 210px;
  border: 1px solid #4e576a;
  border-radius: 40px;
  background-color: #bfc6d4;
`;

export const CardImage = styled.img`
  width: 133px;
  height: 112px;
  margin: 0 auto;
  object-fit: contain;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  color: #0a0e15;
  font-weight: 400;
  max-width: 150px;
  text-decoration: none;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.p`
  color: #373f4e;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
`;

export const CardAmount = styled.p`
  color: #0a0e15;
  font-size: 14px;
  font-weight: 700;
`;
