import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  padding: 30px;
  width: 210px;
  border: 1px solid #4e576a;
  border-radius: 40px;
  background-color: #9ba3b4;

  &:hover {
    transform: scale(1.14);
    box-shadow: 0 9px 18px #fff;
    position: relative;
    transition:
      box-shadow 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }
`;

export const CardImage = styled.img`
  width: 133px;
  height: 112px;
  margin: 0 auto;
  object-fit: contain;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  max-width: 150px;
  text-decoration: none;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.p`
  color: #d1d6e0;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
`;

export const CardAmount = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
