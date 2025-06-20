import styled from "styled-components";

export const StyledInput = styled.input`
  width: 250px;
  height: 45px;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  border-radius: 10px;
  color: #fff;
  padding: 15px;

  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`;
