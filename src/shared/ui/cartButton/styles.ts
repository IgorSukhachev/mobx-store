import styled from "styled-components";

export const ButtonAdd = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-color: transparent;
`;

export const ButtonText = styled.button<{ $inCart: boolean }>`
  width: 200px;
  padding: 20px;
  background-color: #9dd458;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 18px;
  cursor: pointer;
`;
