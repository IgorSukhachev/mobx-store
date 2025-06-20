import { observer } from "mobx-react-lite";
import Search from "../../shared/ui/search";
import ProductCard from "../../shared/ui/card";
import { productsStore } from "../../store/productsStore";
import { ProductWrapper, ProductTitle, ProductsGrid, Spinner } from "./styles";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Popup from "../../shared/ui/popup";

const Products = observer(() => {
  useEffect(() => {
    productsStore.loadProducts();
  }, []);

  if (productsStore.loading)
    return (
      <Spinner>
        <ClipLoader size={150} />
      </Spinner>
    );
  if (productsStore.error) return <div>Ошибка загрузки...</div>;
  if (productsStore.products.length === 0) return <div>Нет доступных товаров</div>;

  return (
    <ProductWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductTitle>Все товары</ProductTitle>
        <Search />
      </div>
      <ProductsGrid>
        {productsStore.filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </ProductsGrid>
    </ProductWrapper>
  );
});

export default Products;
