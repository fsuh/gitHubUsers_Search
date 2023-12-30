import loginImg from "../assets/signUp.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<section className="grid min-h-[100vh] place-items-center px-8">
			<div className="block w-[90vw] max-w-2xl text-center">
				<img
					src={loginImg}
					alt="signUp image"
					className="mb-8 w-full block"
				/>
				<h1 className="mb-6 text-5xl sm:text-6xl tracking-widest capitalize leading-5 sm:leading-4 font-sans">
					Fsuh github users
				</h1>
				<button
					className="btn btn-primary mt-4"
					onClick={() => loginWithRedirect()}
				>
					Log In/Sign Up
				</button>
			</div>
		</section>
	);
};
export default Landing;
