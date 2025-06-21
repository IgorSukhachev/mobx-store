import { Button, Image, StyledDiv, Text, Title, Wrapper } from "./styles";
import box from "../../assets/icons/box.png";
import { cartStore } from "../../../store/cartStore";

const EmptyCart = () => {
  const closePopup = () => {
    cartStore.toggleCartPopup();
  };

  return (
    <StyledDiv>
      <Wrapper>
        <Image src={box} alt='коробка' />
        <Title>Корзина пустая</Title>
        <Text>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</Text>
      </Wrapper>
      <Button onClick={closePopup}>Вернуться назад</Button>
    </StyledDiv>
  );
};

export default EmptyCart;
