import { observer } from "mobx-react-lite";
import { CardImage, Card, CardTitle, CardPrice, CardAmount, CardBottom } from "./styles";
import CartButton from "../cartButton";
import { Link } from "@tanstack/react-router";
import FavoriteButton from "../favoriteButton";

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = observer(({ id, title, price, image }: CardProps) => {
  const truncateTitle = (text: string, maxLength: number = 50) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card>
      <FavoriteButton productId={id} />
      <Link to='/product/$productId' params={{ productId: id.toString() }}>
        <CardImage src={image} alt={title} />
        <CardTitle>{truncateTitle(title)}</CardTitle>
      </Link>
      <CardBottom>
        <div>
          <CardPrice>цена:</CardPrice>
          <CardAmount>{price} ₽</CardAmount>
        </div>
        <CartButton productId={id} />
      </CardBottom>
    </Card>
  );
});

export default ProductCard;
