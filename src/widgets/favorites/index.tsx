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
import EmptyFavorites from "../../shared/ui/emptyFavorites";

const FavoritesPage = observer(() => {
  useEffect(() => {
    productsStore.loadProducts();
  }, []);

  const favoriteProducts = productsStore.products.filter((product) =>
    favoriteStore.hasItem(product.id),
  );

  if (productsStore.loading)
    return (
      <WindowStyled>
        <Header />
        <Spinner>
          <ClipLoader size={150} />
        </Spinner>
      </WindowStyled>
    );
  return (
    <WindowStyled>
      <Header />
      <Favorites>
        <FavoritesTitle>Мои закладки</FavoritesTitle>
        {favoriteProducts.length === 0 ? (
          <EmptyFavorites />
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
