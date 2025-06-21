import {
  Item,
  ItemImage,
  ItemPrice,
  Items,
  ItemTitle,
  ItemWrapper,
  OrderButton,
  PopupWrapper,
  Title,
  Total,
  TotalPrice,
  TotalText,
  TotalWrapper,
  Content,
  Wrapper,
  ItemsWrapper,
  TotalLine,
} from "./styles";

import CartButton from "../cartButton";
import { cartStore } from "../../../store/cartStore";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../../store/productsStore";
import EmptyCart from "../emptyCart";

const Popup = observer(() => {
  const closePopup = () => {
    cartStore.toggleCartPopup();
  };

  const cartProducts = Array.from(cartStore.items)
    .map((id) => productsStore.products.find((p) => p.id === id))
    .filter(Boolean);

  const totalAmount = cartStore.totalAmount;
  const taxAmount = Math.round(totalAmount * 0.05);

  const truncateTitle = (text: string, maxLength: number = 50) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <PopupWrapper onClick={closePopup}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <Title>Корзина</Title>
          {cartProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <ItemsWrapper>
                <Items>
                  {cartProducts.map((product) => (
                    <Item key={product?.id}>
                      <ItemImage src={product?.image} />
                      <ItemWrapper>
                        <ItemTitle>{truncateTitle(product?.title ?? "")}</ItemTitle>
                        <ItemPrice>{product?.price} руб.</ItemPrice>
                      </ItemWrapper>
                      <CartButton productId={product?.id ?? 0} />
                    </Item>
                  ))}
                </Items>
              </ItemsWrapper>

              <TotalWrapper>
                <Total>
                  <TotalText>Итого:</TotalText>
                  <TotalLine />
                  <TotalPrice>{totalAmount.toLocaleString()} руб.</TotalPrice>
                </Total>
                <Total>
                  <TotalText>Налог 5%:</TotalText>
                  <TotalLine />
                  <TotalPrice>{taxAmount.toLocaleString()} руб.</TotalPrice>
                </Total>
                <OrderButton>Оформить заказ</OrderButton>
              </TotalWrapper>
            </>
          )}
        </Wrapper>
      </Content>
    </PopupWrapper>
  );
});

export default Popup;
