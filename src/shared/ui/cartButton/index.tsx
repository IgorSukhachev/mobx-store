import { ButtonAdd, ButtonText } from "./styles";
import whiteAddIcon from "../../assets/icons/whiteAdd.svg";
import greenAddIcon from "../../assets/icons/greenAdd.svg";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../../store/cartStore";

interface ButtonProps {
  productId: number;
  variant?: "icon" | "text";
}

const CartButton = observer(({ productId, variant = "icon" }: ButtonProps) => {
  const isInCart = cartStore.hasItem(productId);

  const handleClick = () => {
    cartStore.toggleItem(productId);
  };

  const buttonText = isInCart ? "В корзине" : "Добавить в корзину";

  return variant === "icon" ? (
    <ButtonAdd onClick={handleClick}>
      <img
        src={isInCart ? greenAddIcon : whiteAddIcon}
        alt={isInCart ? "Удалить из корзины" : "Добавить в корзину"}
      />
    </ButtonAdd>
  ) : (
    <ButtonText $inCart={isInCart} onClick={handleClick}>
      {buttonText}
    </ButtonText>
  );
});

export default CartButton;
