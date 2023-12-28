import customFetch from "./utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useCheckRequests = () => {
	const { isLoading, data, error, isError } = useQuery({
		queryKey: ["requests"],
		queryFn: async () => {
			const { data } = await customFetch("/rate_limit");
			return data;
		},
	});
	return { isLoading, data, error, isError };
};
