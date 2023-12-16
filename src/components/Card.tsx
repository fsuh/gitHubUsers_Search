import { useGitHubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
	const { gitHubUser } = useGitHubContext();
	const {
		avatar_url,
		html_url,
		name,
		company,
		blog,
		bio,
		location,
		twitter_username,
	} = gitHubUser;
	return (
		<article className="bg-white py-6 px-8 rounded-tr rounded-b relative before:content-['user'] before:absolute before:top-0 before:left-0 before:translate-y-[-100%] before:bg-white before:text-gray-500 before:rounded-r before:capitalize before:pt-2 before:pr-4 before:pb-0 before:pl-4 before:text-xl before:tracking-widest">
			<header className="grid grid-flow-col auto-cols-auto grid-cols-3 items-center gap-y-1 mb-4">
				<img
					src={avatar_url}
					alt={name}
					className="w-[75px] h-[75px] rounded-full"
				/>
				<div className="mr-0">
					<h4 className="mb-1 ">{name}</h4>
					<p className="mb-0">@ {twitter_username || "N/A"}</p>
				</div>
				<a
					href={html_url}
					className="text-blue-500 border-2 border-blue-500 border-solid py-1 px-3 rounded-2xl capitalize tracking-widest transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-blue-500 text-center"
				>
					follow
				</a>
			</header>
			<p className="text-gray-500 mb-2">{bio}</p>
			<div className="links">
				<p
					className="mb-2 flex items-center"
					title="Company"
				>
					<MdBusiness className="mr-2 text-xl" />
					{company}
				</p>
				<p
					className="mb-2 flex items-center"
					title="location"
				>
					<MdLocationOn className="mr-2 text-xl" />
					{location || "N/A"}
				</p>
				<a
					href={`https://${blog}`}
					className="mb-2 flex items-center text-blue-500 transition-all duration-300 ease-linear hover:text-blue-300"
				>
					<MdLink className="mr-2 text-xl text-gray-500" />
					{blog}
				</a>
			</div>
		</article>
	);
};
export default Card;
