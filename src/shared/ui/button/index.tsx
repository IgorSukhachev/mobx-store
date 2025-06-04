import { ButtonAdd } from "./styles";
import whiteAddIcon from "../../assets/icons/whiteAdd.svg";
import greenAddIcon from "../../assets/icons/greenAdd.svg";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../../store/cartStore";

interface ButtonProps {
  productId: number;
}

const Button = observer(({ productId }: ButtonProps) => {
  const isInCart = cartStore.hasItem(productId);

  const handleClick = () => {
    cartStore.toggleItem(productId);
  };

  return (
    <ButtonAdd onClick={handleClick}>
      <img
        src={isInCart ? greenAddIcon : whiteAddIcon}
        alt={isInCart ? "Удалить из корзины" : "Добавить в корзину"}
      />
    </ButtonAdd>
  );
});

export default Button;
