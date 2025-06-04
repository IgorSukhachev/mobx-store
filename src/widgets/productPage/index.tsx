import { observer } from "mobx-react-lite";
import Header from "../header";
import { useParams } from "@tanstack/react-router";
import { productsStore } from "../../store/productsStore";
import { WindowStyled } from "../window/styles";
import {
  Description,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductModel,
  ProductPrice,
  ProductToCart,
  StyledP,
} from "./styles";
import CartButton from "../../shared/ui/cartButton";

const ProductPage = observer(() => {
  const { productId } = useParams({ strict: false });
  const product = productsStore.products.find((p) => p.id === Number(productId));

  if (!product) return <div>Товар не найден</div>;

  return (
    <WindowStyled>
      <Header />
      <ProductCard>
        <ProductModel>Модель: {product.model}</ProductModel>
        <Description>
          <ProductImage src={product.image} alt={product.title} />
          <div>
            <ProductDescription>{product.description}</ProductDescription>
            <StyledP>Стоимость:</StyledP>
            <ProductToCart>
              <ProductPrice>{product.price} ₽</ProductPrice>
              <CartButton productId={product.id} variant='text' />
            </ProductToCart>
          </div>
        </Description>
      </ProductCard>
    </WindowStyled>
  );
});

export default ProductPage;
