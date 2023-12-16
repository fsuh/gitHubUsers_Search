import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import mockFollowers from "./mockData/mockFollowers";
import mockUsers from "./mockData/mockUsers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";
import { IGitHubUser, IGitHubFollowers, IGitHubRepo } from "../models/User";
import customFetch from "../utils";

export type ContextProps = {
	gitHubUser: IGitHubUser;
	setGitHubUser?: React.Dispatch<React.SetStateAction<IGitHubUser>>;
	repos: unknown[];
	setRepos?: React.Dispatch<React.SetStateAction<unknown[]>>;
	followers: IGitHubFollowers[];
	setFollowers?: React.Dispatch<React.SetStateAction<IGitHubFollowers[]>>;
};

const baseUrl = "https://api.github.com";

// export const GitHubContext = createContext<Partial<ContextProps>>({
// 	gitHubUser: undefined,
// 	setGitHubUser: () => {},
// 	repos: undefined,
// 	setRepos: () => {},
// 	followers: undefined,
// 	setFollowers: () => {},
// });
export const GitHubContext = createContext<ContextProps | undefined>(undefined);

export const useGitHubContext = () => {
	const context = useContext(GitHubContext);
	if (!context) {
		throw new Error("useGitHubContext must be used within a GitHubProvider");
	}
	return context;
};

type ContextProviderProps = {
	children: ReactNode;
};

const GitHubProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [gitHubUser, setGitHubUser] = useState<IGitHubUser>(mockUsers);
	const [repos, setRepos] = useState<unknown[]>(mockRepos);
	const [followers, setFollowers] = useState<IGitHubFollowers[]>(mockFollowers);

	const gitHubValue: ContextProps = {
		gitHubUser,
		repos,
		followers,
	};
	return (
		<GitHubContext.Provider value={gitHubValue}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubProvider;
