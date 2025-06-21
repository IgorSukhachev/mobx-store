import image from "../../assets/icons/sad.png";
import { EmptyDivWrapper, TextWrapper } from "./styles";
import { Button, Text, Title } from "../emptyCart/styles";
import { useRouter } from "@tanstack/react-router";

const EmptyFavorites = () => {
  const router = useRouter();

  const goBack = () => {
    router.history.back();
  };

  return (
    <EmptyDivWrapper>
      <TextWrapper>
        <img src={image} alt='смайлик' />
        <Title>Закладок нет :(</Title>
        <Text>Вы ничего не добавляли в закладки</Text>
      </TextWrapper>
      <Button onClick={goBack}>Вернуться назад</Button>
    </EmptyDivWrapper>
  );
};

export default EmptyFavorites;
