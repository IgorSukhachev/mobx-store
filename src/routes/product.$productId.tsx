// routes/product.$productId.tsx
import { createFileRoute } from "@tanstack/react-router";
import ProductPage from "../widgets/productPage";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});
