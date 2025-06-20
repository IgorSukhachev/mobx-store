import styled from "styled-components";

export const LikeButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.7;
  }
`;
