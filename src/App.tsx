import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Error, Landing, Auth } from "./pages";
import { loader as dashboardLoader } from "./pages/Dashboard";
//import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		index: true,
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
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
