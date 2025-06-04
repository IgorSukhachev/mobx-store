import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 14px;
  flex-direction: column;
  //align-items: center;
  padding: 30px;
  width: 210px;
  //height: 260px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
`;

export const CardImage = styled.img`
  width: 133px;
  height: 112px;
  margin: 0 auto;
  object-fit: contain;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 400;
  max-width: 150px;
  text-decoration: none;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.p`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
`;

export const CardAmount = styled.p`
  color: #000;
  font-weight: 700;
`;
