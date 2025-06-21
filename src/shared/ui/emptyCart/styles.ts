import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img``;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
`;

export const Text = styled.p`
  color: #fff;
  line-height: 24px;
  max-width: 285px;
  opacity: 0.4;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #9dd458;
  padding: 18px;
  border: none;
  border-radius: 18px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
