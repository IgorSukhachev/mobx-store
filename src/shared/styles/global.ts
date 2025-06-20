import "../assets/fonts/font.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  body {
    font-family: 'Inter', sans-serif;
		background-color: #0a0e15;
  }

	a {
	text-decoration: none;
	}
`;
