import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const { isAuthenticated, user } = useAuth0();
	const isUser = isAuthenticated && user;
	if (!isUser) {
		return (
			<Navigate
				to="/login"
				replace
			/>
		);
	}
	return children;
};

export default ProtectedRoute;
