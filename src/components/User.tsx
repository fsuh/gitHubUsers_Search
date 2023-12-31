import Card from "./Card";
import Followers from "./Followers";
const User = () => {
	return (
		<section className="p-4 relative">
			<div className="w-[90vw] max-w-[1170px] my-0 mx-auto custom:w-[95vw] md:w-screen pt-8 grid  gap-x-12 gap-y-8 md:gap-y-20 mobile:gap-y-12 custom:grid-cols-2">
				<Card />
				<Followers />
			</div>
		</section>
	);
};
export default User;
