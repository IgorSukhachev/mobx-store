import { observer } from "mobx-react-lite";
import { WindowStyled } from "../window/styles";
import Header from "../header";
import { Favorites, FavoritesTitle } from "./styles";
import { useEffect } from "react";
import { productsStore } from "../../store/productsStore";
import { favoriteStore } from "../../store/favoriteStore";
import { ClipLoader } from "react-spinners";
import { ProductsGrid, Spinner } from "../products/styles";
import ProductCard from "../../shared/ui/card";

const FavoritesPage = observer(() => {
  useEffect(() => {
    productsStore.loadProducts();
  }, []);

  const favoriteProducts = productsStore.products.filter((product) =>
    favoriteStore.hasItem(product.id),
  );

  if (productsStore.loading)
    return (
      <Spinner>
        <ClipLoader size={150} />
      </Spinner>
    );
  return (
    <WindowStyled>
      <Header />
      <Favorites>
        <FavoritesTitle>Мои закладки</FavoritesTitle>
        {favoriteProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px" }}>В избранном пока нет товаров</div>
        ) : (
          <ProductsGrid>
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </ProductsGrid>
        )}
      </Favorites>
    </WindowStyled>
  );
});

export default FavoritesPage;
