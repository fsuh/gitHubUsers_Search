import { useLoaderData } from "react-router-dom";
import { Info, Repos, User, Search, Navbar } from "../components";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useGitHubContext } from "../context/context";
import loadingImg from "../assets/ZKZx.gif";
//import customFetch from "../utils";
//import { toast } from "react-toastify";
//import { useGitHubContext } from "../context/context";
//import { searchGithubUser } from "../ReactQueryFxns";

// const searchGithubUser = (user: string) => {
// 	if (!user) {
// 		toast.error("Specify a githubUser");
// 	}
// 	return {
// 		queryKey: ["githubuser", user],
// 		queryFn: async () => {
// 			try {
// 				const response = await customFetch(`/users/${user}`);
// 				if (!response) {
// 					toast.error(`there is no user with the username ${user}`);
// 				}
// 				return response.data;
// 			} catch (error) {
// 				toast.error(`An error occured while searching for user ${user}`);
// 			}
// 		},
// 	};
// };

// export const loader =
// 	(queryClient: QueryClient) =>
// 	async ({ request }: { request: Request }) => {
// 		const url = new URL(request.url);
// 		const user = url.searchParams.get("login") || "john-smilga";
// 		const response = await queryClient.ensureQueryData(searchGithubUser(user));
// 		// console.log("the respons is", response);
// 		return { user, gitHubUser: response };
// 	};

export const loader = async () => {
	return "something";
};

const Dashboard = () => {
	//const { user } = useLoaderData() as { user: string };
	// const { data: githubUser } = useQuery(searchGithubUser(user));
	// const { setGitHubUser } = useGitHubContext();
	// setGitHubUser(githubUser);
	const { data } = useLoaderData();
	console.log(data);

	const { isLoading } = useGitHubContext();
	if (isLoading) {
		return (
			<main className="pb-8">
				<Navbar />
				<Search />
				<img
					src={loadingImg}
					alt="loading spinner"
					className="w-80 h-80 block mx-auto mt-40 bg-transparent"
				/>
			</main>
		);
	}

	return (
		<main className="pb-8">
			<Navbar />
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
};
export default Dashboard;
