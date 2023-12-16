import { useState } from "react";
import { Form } from "react-router-dom";
import { FormInput, ButtonPlusIcon } from "../components";
import Image from "../assets/fsuhImage.png";
import { BiRename } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

const Auth = () => {
	const [activeTab, setActiveTab] = useState("signIn");

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};
	return (
		<section className="h-screen grid place-items-center">
			<Form
				method="POST"
				className="w-96 bg-base-100 shadow-lg gap-y-4"
			>
				<div className=" w-full flex flex-col justify-center items-center gap-4 bg-primary py-4 rounded">
					<img
						src={Image}
						alt="app image"
						className="w-1/4 H-auto"
					/>
					<h4 className="block text-2xl font-bold ">Github Users Search</h4>
				</div>
				<div className="flex flex-row  justify-center items-center p-2 tabs tabs-boxed tabs-lg">
					<button
						className={`tab tab-active w-1/2 text-2xl`}
						onClick={() => handleTabClick("signIn")}
					>
						sign in
					</button>
					<button
						className={`tab w-1/2 text-2xl`}
						onClick={() => handleTabClick("signUp")}
					>
						sign up
					</button>
				</div>
				{/* <div>
					<ButtonPlusIcon
						icon={FcGoogle}
						label={`${
							activeTab === "signIn"
								? "Sign in with Google"
								: "Sign up to Google"
						}`}
						type="button"
					/>
					<ButtonPlusIcon
						icon={FaGithubSquare}
						label={`${
							activeTab === "signIn"
								? "Sign in with GitHub"
								: "Sign up to GitHub"
						}`}
						type="button"
					/>
				</div>
				<div>
					<p>or</p>
				</div> */}
				{/* {activeTab === "signIn" && (
					<div>
						<div>
							<ButtonPlusIcon
								icon={FcGoogle}
								label="Sign in with Google"
								type="button"
							/>
							<ButtonPlusIcon
								icon={FaGithubSquare}
								label="Sign in with Github"
								type="button"
							/>
						</div>
						<p>or</p>
						<div>
							<FormInput
								type="email"
								icon={MdEmail}
								placeholder="yours@example.com"
							/>
							<FormInput
								type="password"
								icon={PiPasswordFill}
								placeholder="your password"
							/>
						</div>
					</div>
				)}
				{activeTab === "signUp" && (
					<div>
						<div>
							<ButtonPlusIcon
								icon={FcGoogle}
								label="Sign up with Google"
								type=""
							/>
							<ButtonPlusIcon
								icon={FaGithubSquare}
								label="Sign up with Github"
								type="button"
							/>
						</div>
						<p>or</p>
						<div>
							<FormInput
								type="text"
								icon={BiRename}
								placeholder="your name"
							/>
							<FormInput
								type="email"
								icon={MdEmail}
								placeholder="yours@example.com"
							/>
							<FormInput
								type="password"
								icon={PiPasswordFill}
								placeholder="your password"
							/>
						</div>
					</div>
				)} */}
			</Form>
		</section>
	);
};
export default Auth;
