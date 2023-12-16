import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Error, Landing, Auth } from "./pages";
import { loader as dashboardLoader } from "./pages/Dashboard";
//import { Auth0Provider } from "@auth0/auth0-react";
// import { QueryClientProvider, QueryClient } from "react-query";

// const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		loader: dashboardLoader,
		errorElement: <Error />,
	},
	{
		path: "/landing",
		element: <Landing />,
		errorElement: <Error />,
	},
	{
		path: "/auth",
		element: <Auth />,
		errorElement: <Error />,
	},
]);
const App = () => {
	return (
		<RouterProvider router={router} />
		// <QueryClientProvider client={queryClient}>
		// </QueryClientProvider>
	);
};
export default App;
