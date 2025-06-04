import Header from "../header";
import Products from "../products";
import { WindowStyled } from "./styles";

const Window = () => {
  return (
    <WindowStyled>
      <Header />
      <Products />
    </WindowStyled>
  );
};

export default Window;
