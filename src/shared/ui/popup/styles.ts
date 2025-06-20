import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 50%);
`;

export const Content = styled.div`
  width: 485px;
  height: 100vh;
  background-color: #4e576a;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 1;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(100vh-200px);
  overflow-anchor: none;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9ba3b4;
    border-radius: 8px;
  }

  scrollbar-width: thin;
  scrollbar-color: #9ba3b4 transparent;
`;

export const ItemsWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin: 20px 0;
  padding-right: 30px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9ba3b4;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #9ba3b4;
  }

  scrollbar-width: thin;
  scrollbar-color: #9ba3b4 transparent;
`;

export const Item = styled.div`
  background-color: #9ba3b4;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemTitle = styled.p`
  font-size: 14px;
  max-width: 150px;
  color: #fff;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Total = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  font-size: 16px;
`;

export const TotalText = styled.span`
  color: #fff;
`;

export const TotalLine = styled.span`
  flex-grow: 1;
  border-bottom: 1px dotted #ccc;
  margin: 0 8px;
  transform: translateY(1px);
`;

export const TotalPrice = styled.span`
  color: #fff;
  font-weight: 600;
`;

export const OrderButton = styled.button`
  background-color: #9dd458;
  border: none;
  padding: 18px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:not(:disabled)hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.7;
  }

  &:disabled {
    background-color: grey;
    cursor: default;
  }
`;
