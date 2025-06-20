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
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(100vh-200px);
`;

export const ItemsWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin: 20px 0;
`;

export const Item = styled.div`
  border: 1px solid #f3f3f3;
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
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
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
  justify-content: space-between;
  position: relative;
  padding-bottom: 4px;
  font-size: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-bottom: 1px dotted #ccc;
    z-index: 0;
  }

  span {
    z-index: 1;
    position: relative;
    padding: 0 5px;
  }
`;

export const TotalText = styled.span``;

export const TotalPrice = styled.span`
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
`;
