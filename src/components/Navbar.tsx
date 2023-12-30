import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
	const { isAuthenticated, logout, user } = useAuth0();
	const isUser = isAuthenticated && user;
	return (
		<nav className="p-6 mb-16 bg-white text-center grid items-center grid-cols-[auto_auto_100px] justify-center gap-6">
			{isUser && user.picture && (
				<img
					src={user.picture}
					alt={user.name}
					className="w-[35px] h-[35px] rounded-full object-cover"
				/>
			)}
			{isUser && user.name && (
				<h4 className="mb-0 font-normal">
					Welcome, <strong className="uppercase">{user.name}</strong>
				</h4>
			)}
			{isUser && (
				<button
					className="bg-transparent border-transparent text-xl capitalize tracking-widest text-gray-500 cursor-pointer"
					onClick={() =>
						logout({ logoutParams: { returnTo: window.location.origin } })
					}
				>
					logout
				</button>
			)}
		</nav>
	);
};
export default Navbar;
