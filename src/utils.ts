import axios from "axios";

const customFetch = axios.create({
	baseURL: "https://api.github.com",
});

export default customFetch;
