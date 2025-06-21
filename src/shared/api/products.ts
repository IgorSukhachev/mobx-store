import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.in/api/products");
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Network response was not ok");
  }
};
