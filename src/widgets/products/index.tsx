import { observer } from "mobx-react-lite";
import Search from "../../shared/ui/search";
import ProductCard from "../../shared/ui/card";
import { productsStore } from "../../store/productsStore";
import { ProductWrapper, ProductTitle, ProductsGrid } from "./styles";
import { useEffect } from "react";

const Products = observer(() => {
  useEffect(() => {
    productsStore.loadProducts();
  }, []);
  if (productsStore.loading) return <div>Загрузка...</div>;
  if (productsStore.error) return <div>Ошибка загрузки...</div>;
  if (productsStore.products.length === 0) return <div>Нет доступных товаров</div>;

  return (
    <ProductWrapper>
      <ProductTitle>Все товары</ProductTitle>
      <Search />
      <ProductsGrid>
        {productsStore.products.map((product) => (
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
