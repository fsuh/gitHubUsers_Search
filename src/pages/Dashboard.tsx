import { Params, useLoaderData } from "react-router-dom";
import { Info, Repos, User, Search, Navbar } from "../components";
import customFetch from "../utils";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCheckRequests } from "../ReactQueryHooks";

const url = "/users";

const searchGithubUser = (user: string) => {
	return {
		queryKey: ["githubuser", user],
		queryFn: async () => {
			const response = await customFetch(`/users/${user}`);
			return response.data;
		},
	};
};

export const loader =
	(queryClient: QueryClient) =>
	async ({ request }: { request: Request }) => {
		const url = new URL(request.url);
		const user = url.searchParams.get("login") || "";
		const response = await queryClient.ensureQueryData(searchGithubUser(user));

		console.log("the respons is", response);
		return "something";
	};

// export const loader = async ({ request }: { request: Request }) => {
// 	const params = new URL(request.url).searchParams;
// 	const search = params.get("search");
// 	console.log(params);
// 	return "something";
// };
const Dashboard = () => {
	const { user } = useLoaderData();
	console.log("the user is", user);
	return (
		<main>
			{/* <Navbar /> */}
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
};
export default Dashboard;
