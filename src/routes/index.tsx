import { createFileRoute } from "@tanstack/react-router";
import Window from "../widgets/window";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Window />
    </>
  );
}
