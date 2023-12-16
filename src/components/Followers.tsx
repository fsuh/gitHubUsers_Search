import { useGitHubContext } from "../context/context";

const Followers = () => {
	const { followers } = useGitHubContext();

	return (
		<article className="bg-white py-6 px-8 rounded-tr rounded-b relative before:content-['followers'] before:absolute before:top-0 before:left-0 before:translate-y-[-100%] before:bg-white before:text-gray-500 before:rounded-r before:capitalize before:pt-2 before:pr-4 before:pb-0 before:pl-4 before:text-xl before:tracking-widest">
			<div className="h-[260px] grid auto-rows-auto grid-flow-row-dense gap-x-5 gap-y-4 py-4 px-8 overflow-y-scroll">
				{followers?.map((follower, index) => {
					const { avatar_url: img, html_url, login } = follower;
					return (
						<article
							key={index}
							className="grid grid-flow-col auto-rows-auto items-center gap-y-4 transition-all duration-300 ease-linear py-1 px-2 rounded"
						>
							<img
								src={img}
								alt={login}
								className="h-full w-11 rounded-full object-cover"
							/>
							<div>
								<h4 className="mb-0">{login}</h4>
								<a
									href={html_url}
									className="text-gray-500"
								>
									{html_url}
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</article>
	);
};
export default Followers;
