import loginImg from "../assets/signUp.svg";
import { Link } from "react-router-dom";
//import { useAuthState } from "react-firebase-hooks/auth";
//import { useNavigate } from "react-router-dom";
//import { auth, handleLogin, handleRegistration } from "../auth/firebase";
//import { useState } from "react";
//import { IUser } from "../models/User";

// const initialState: IUser = {
// 	name: "",
// 	email: "",
// 	password: "",
// };
const Landing = () => {
	//const [users, setUsers] = useState(initialState);
	// const [user, loading, error] = useAuthState(auth);

	// if (loading) {
	// 	return (
	// 		<div>
	// 			<p>Initalising User ...</p>
	// 		</div>
	// 	);
	// }
	// if (error) {
	// 	console.error(error);
	// return (
	// 	<div>
	// 		<p>Error: {error}</p>
	// 	</div>
	// );
	//}

	return (
		<section className="grid min-h-[100vh] place-items-center px-8">
			<div className="block w-[90vw] max-w-2xl text-center">
				<img
					src={loginImg}
					alt="signUp image"
					className="mb-8 w-full block"
				/>
				<h1 className="mb-6 text-5xl sm:text-6xl tracking-widest capitalize leading-5 sm:leading-4 font-sans">
					github user
				</h1>
				<Link
					to="/auth"
					className="btn btn-primary mt-4"
				>
					{" "}
					Log In/Sign Up
				</Link>
			</div>
		</section>
	);
};
export default Landing;
