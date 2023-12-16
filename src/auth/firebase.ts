// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	NextOrObserver,
	onAuthStateChanged,
	User,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const handleLogin = async (email: string, password: string) => {
	if (!email && !password) return;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		toast.error(
			`${error instanceof Error ? error.message : "An error occurred"}`
		);
	}
};

export const userStateListener = (callback: NextOrObserver<User>) => {
	return onAuthStateChanged(auth, callback);
};

const handleLogout = () => {
	signOut(auth);
};

const handleRegistration = async (
	name: string,
	email: string,
	password: string
) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = response.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (error) {
		toast.error(
			`${error instanceof Error ? error.message : "An error occurred"}`
		);
	}
};

const handleGoogleLogin = async () => {
	const provider = new GoogleAuthProvider();
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		toast.error(
			`${error instanceof Error ? error.message : "An error occurred"}`
		);
	}
};

const handleGithubLogin = async () => {
	const provider = new GithubAuthProvider();
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		toast.error(
			`${error instanceof Error ? error.message : "An error occurred"}`
		);
	}
};

export {
	auth,
	db,
	handleLogin,
	handleLogout,
	handleRegistration,
	handleGithubLogin,
	handleGoogleLogin,
};
