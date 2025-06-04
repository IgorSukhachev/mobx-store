import { observer } from "mobx-react-lite";
import { productsStore } from "../../../store/productsStore";
import type { ChangeEvent } from "react";
import { StyledInput } from "./styles";

const Search = observer(() => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    productsStore.setSearchQuery(e.target.value);
  };

  return <StyledInput type='text' onChange={handleChange} placeholder='Поиск товаров...' />;
});

export default Search;
