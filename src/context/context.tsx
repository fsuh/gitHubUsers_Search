import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import mockFollowers from "./mockData/mockFollowers";
import mockUsers from "./mockData/mockUsers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";
import { IGitHubUser, IGitHubFollowers } from "../models/User";
import customFetch from "../utils";
import { toast } from "react-toastify";

export type ContextProps = {
	gitHubUser: IGitHubUser;
	setGitHubUser: React.Dispatch<React.SetStateAction<IGitHubUser>>;
	repos: unknown[];
	//setRepos?: React.Dispatch<React.SetStateAction<unknown[]>>;
	followers: IGitHubFollowers[];
	//setFollowers?: React.Dispatch<React.SetStateAction<IGitHubFollowers[]>>;
	requests: number;
	//setRequests?: React.Dispatch<React.SetStateAction<number>>;
	error: IError;
	searchGithubUser: (user: string) => Promise<void>;
	isLoading: boolean;
	//setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

interface IError {
	show: boolean;
	msg: string;
}

export const GitHubContext = createContext<ContextProps | undefined>(undefined);

export const useGitHubContext = () => {
	const context = useContext(GitHubContext)!;
	return context;
};

type ContextProviderProps = {
	children: ReactNode;
};

const GitHubProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [gitHubUser, setGitHubUser] = useState<IGitHubUser>(mockUsers);
	const [repos, setRepos] = useState<unknown[]>(mockRepos);
	const [followers, setFollowers] = useState<IGitHubFollowers[]>(mockFollowers);

	// // request loading
	const [requests, setRequests] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ show: false, msg: "" });
	const searchGithubUser = async (user: string) => {
		toggleError();
		setIsLoading(true);
		const response = await customFetch(`/users/${user}`).catch((error) =>
			console.error(error)
		);
		if (response) {
			setGitHubUser(response.data);
			const { followers_url, repos_url } = response.data;
			await Promise.allSettled([
				axios(`${repos_url}?per_page=100`),
				axios(`${followers_url}?per_page=100`),
			])
				.then((results) => {
					const [repos, followers] = results;
					const status = "fulfilled";
					if (repos.status === status) {
						setRepos(repos.value.data);
					}
					if (followers.status === status) {
						setFollowers(followers.value.data);
					}
				})
				.catch((error) => toast.error(`${error}`));
		} else {
			toggleError(true, `there is no user with the username ${user}`);
		}
		checkRequests();
		setIsLoading(false);
	};
	// check rate
	const checkRequests = async () => {
		const results = await customFetch("/rate_limit");
		const data = results?.data;
		const {
			rate: { remaining },
		} = data;

		setRequests(remaining);
		if (remaining === 0) {
			toggleError(true, "sorry! you have exceeded your hourly rate limit");
		}
		return;
	};
	const toggleError = (show = false, msg = "") => {
		setError({ show, msg });
	};
	// error
	useEffect(() => {
		checkRequests();
	}, []);

	const gitHubValue: ContextProps = {
		gitHubUser,
		setGitHubUser,
		repos,
		followers,
		requests,
		error,
		searchGithubUser,
		isLoading,
		// setSearchUser,
	};
	return (
		<GitHubContext.Provider value={gitHubValue}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubProvider;
