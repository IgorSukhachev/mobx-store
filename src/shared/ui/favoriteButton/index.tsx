import { observer } from "mobx-react-lite";
import { LikeButton } from "./styles";
import favoriteIconActive from "../../assets/icons/favorite_active.png";
import favoriteIconInactive from "../../assets/icons/favorite_inactive.svg";
import { favoriteStore } from "../../../store/favoriteStore";

interface FavoriteButtonProps {
  productId: number;
}

const FavoriteButton = observer(({ productId }: FavoriteButtonProps) => {
  const isInFavorite = favoriteStore.hasItem(productId);
  const handleClick = () => {
    favoriteStore.toggleFavorite(productId);
  };

  return (
    <LikeButton onClick={handleClick}>
      <img src={isInFavorite ? favoriteIconActive : favoriteIconInactive} />
    </LikeButton>
  );
});

export default FavoriteButton;
