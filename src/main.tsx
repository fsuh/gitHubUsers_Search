import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GitHubProvider from "./context/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GitHubProvider>
			<ToastContainer
				position="top-center"
				autoClose={2000}
			/>
			<App />
		</GitHubProvider>
	</React.StrictMode>
);
