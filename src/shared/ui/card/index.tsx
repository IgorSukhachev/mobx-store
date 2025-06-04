import { observer } from "mobx-react-lite";
import { CardImage, Card, CardTitle, CardPrice, CardAmount, CardBottom } from "./styles";
import Button from "../button";

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
      <CardImage src={image} alt={title} />
      <CardTitle>{truncateTitle(title)}</CardTitle>
      <CardBottom>
        <div>
          <CardPrice>цена:</CardPrice>
          <CardAmount>{price} руб.</CardAmount>
        </div>
        <Button productId={id} />
      </CardBottom>
    </Card>
  );
});

export default ProductCard;
