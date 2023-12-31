import { FaFolder, FaCode } from "react-icons/fa";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGitHubContext } from "../context/context";
// import { useLoaderData } from "react-router-dom";
// import { IGitHubUser } from "../models/User";

const Info = () => {
	const { gitHubUser } = useGitHubContext();
	//const { gitHubUser } = useLoaderData() as { gitHubUser: IGitHubUser };
	const { public_repos, followers, following, public_gists } = gitHubUser;

	const items = [
		{
			id: 1,
			icon: <FaFolder className="text-2xl" />,
			label: "repos",
			value: public_repos,
			color: "pink",
		},
		{
			id: 2,
			icon: <FiUsers className="text-2xl" />,
			label: "followers",
			value: followers,
			color: "green",
		},
		{
			id: 3,
			icon: <FiUserPlus className="text-2xl" />,
			label: "following",
			value: following,
			color: "purple",
		},
		{
			id: 4,
			icon: <FaCode className="text-2xl" />,
			label: "gists",
			value: public_gists,
			color: "yellow",
		},
	];

	return (
		<section className="p-4 relative">
			<div className="w-[90vw] max-w-[1170px] my-0 mx-auto custom:w-[95vw] grid grid-flow-row auto-cols-auto grid-cols-4 gap-y-4 gap-x-8">
				{items.map((item) => {
					const { id, icon, label, value, color } = item;
					return (
						<article
							key={id}
							className="bg-white grid grid-flow-row  grid-rows-1 grid-cols-[auto_auto] gap-x-12 md:gap-x-3 py-4 px-8 md:px-4 items-center rounded"
						>
							<span
								className={`w-12 h-12 grid place-items-center rounded-full`}
								style={{ backgroundColor: `${color}` }}
							>
								{icon}
							</span>
							<div>
								<h3 className="mb-0 tracking-normal text-xl text-black font-bold text-center">
									{value}
								</h3>
								<p className="mb-0 capitalize last:text-center">{label}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
export default Info;
