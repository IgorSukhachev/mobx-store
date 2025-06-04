import { createFileRoute } from "@tanstack/react-router";
import Favorites from "../widgets/favorites";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});
