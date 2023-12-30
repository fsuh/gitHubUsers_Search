import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GitHubProvider from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Auth0Provider
			domain={import.meta.env.VITE_AUTHO_DOMAIN}
			clientId={import.meta.env.VITE_AUTHO_CLIENT_ID}
			authorizationParams={{ redirect_uri: window.location.origin }}
		>
			<GitHubProvider>
				<App />
				<ToastContainer
					position="top-center"
					autoClose={2000}
				/>
			</GitHubProvider>
		</Auth0Provider>
	</React.StrictMode>
);
