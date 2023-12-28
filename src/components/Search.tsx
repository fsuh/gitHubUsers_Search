import { FormEvent, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useGitHubContext } from "../context/context";

const Search = () => {
	const [user, setUser] = useState("");
	const { requests, error, setGitHubUser, searchGithubUser } =
		useGitHubContext();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user) {
			searchGithubUser(user);
		}
	};
	return (
		<section className="py-4 relative">
			<div className="w-[90vw] mx-auto max-w-[1170px] custom:w-[95vw] relative grid gap-y-4 gap-x-7 md:grid-cols-2 md:items-center ">
				{error.show && (
					<article className="absolute w-[90vw] top-0 left-0 translate-y-[-100%]">
						<p className="capitalize text-red-500 tracking-widest">
							{error.msg}
						</p>
					</article>
				)}
				<Form onSubmit={handleSubmit}>
					<div className="bg-white grid items-center grid-cols-[auto_1fr_auto] gap-x-2 rounded-md p-2">
						<MdSearch className="text-gray-500 text-xl custom-small:text-sm" />
						<input
							type="search"
							name="login"
							placeholder="enter github user"
							value={user}
							onChange={(e) => setUser(e.target.value)}
							className="text-gray-300 text-xl custom-small:text-sm py-1 px-2 border-transparent outline-gray-900 tracking-widest capitalize rounded"
						/>
						{requests > 0 && (
							<button
								type="submit"
								className="text-xl custom-small:text-sm rounded-md border-transparent py-1 px-2 capitalize tracking-widest bg-cyan-600 text-white cursor-pointer hover:bg-cyan-400 hover:text-green-950 transition duration-300 ease-linear
								
							"
								disabled={isSubmitting}
							>
								{isSubmitting ? "searching..." : "search"}
							</button>
						)}
					</div>
				</Form>
				<h3 className="text-gray-500 font-normal text-2xl mb-0 md:px-2 capitalize">
					requests: {requests} / 60
				</h3>
			</div>
		</section>
	);
};
export default Search;
