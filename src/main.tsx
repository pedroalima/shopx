import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme.ts";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { StoreProvider } from "./context/StoreContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StoreProvider>
				<Provider store={store}>
					<App />
					<GlobalStyle />
				</Provider>
			</StoreProvider>
		</ThemeProvider>
	</React.StrictMode>
);