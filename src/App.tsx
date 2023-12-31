import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	AuthWrapper,
	Dashboard,
	Error,
	Landing,
	ProtectedRoute,
} from "./pages";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		index: true,
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		//loader: dashboardLoader(queryClient),
		loader: dashboardLoader,
		errorElement: <Error />,
	},
	{
		path: "/login",
		element: <Landing />,
		errorElement: <Error />,
	},
]);
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthWrapper>
				<RouterProvider router={router} />
			</AuthWrapper>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
