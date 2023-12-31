import { toast } from "react-toastify";
import customFetch from "./utils";
//import { useQuery, useQueryClient } from "@tanstack/react-query";

export const searchGithubUser = (user: string) => {
	if (!user) {
		toast.error("Specify a githubUser");
	}
	return {
		queryKey: ["githubuser", user],
		queryFn: async () => {
			try {
				const response = await customFetch(`/users/${user}`);
				if (!response) {
					toast.error(`there is no user with the username ${user}`);
				}
				return response.data;
			} catch (error) {
				toast.error(`An error occured while searching for user ${user}`);
			}
		},
	};
};
