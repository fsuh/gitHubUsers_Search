import { useLoaderData } from "react-router-dom";
import { Info, Repos, User, Search, Navbar } from "../components";

export const loader = async () => {
	return "something";
};
const Dashboard = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<main>
			{/* <Navbar /> */}
			{/* <Search /> */}
			<Info />
			<User />
			<Repos />
		</main>
	);
};
export default Dashboard;
