// Importing SWR library that provides data fetching capabilities
import useSWR from "swr";
// Importing custom fetcher module to make GET request
import fetcher from "../lib/fetcher";

// Defining a custom hook used to fetch the current user data
const useCurrentUser = () => {
  // Using the imported SWR hook to fetch and manage the current user data
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  // Returning the fetched data, error, loading state, and function to update data
  return { data, error, isLoading, mutate };
};

// Exporting the useCurrentUser hook as the default export
export default useCurrentUser;
