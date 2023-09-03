import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);