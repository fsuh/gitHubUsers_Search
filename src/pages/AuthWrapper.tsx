import { useAuth0 } from "@auth0/auth0-react";
import loadingImg from "../assets/ZKZx.gif";
const AuthWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { isLoading, error } = useAuth0();
	if (isLoading) {
		return (
			<section className="min-h-screen grid place-items-center">
				<img
					className="w-40"
					src={loadingImg}
					alt="spinner"
				/>
			</section>
		);
	}
	if (error) {
		return (
			<section className="min-h-screen grid place-items-center">
				<h1>{error.message}</h1>
			</section>
		);
	}
	return <>{children}</>;
};
export default AuthWrapper;
