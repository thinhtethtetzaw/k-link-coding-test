import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const NODE_SERVER = "http://localhost:8081/api/v1";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiZXJyeWJlYmVAZ21haWwuY29tIiwiaWF0IjoxNjgwODk0NzIwLCJleHAiOjE2ODA5ODExMjB9.ZBxlih1Pv1z9PxOYPT1o7NuO1xAS9PqcR75sbVKgObU",
  },
};

const useFetchQuery = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () =>
      axios.get(`${NODE_SERVER}${url}`, config).then((res) => res.data),
  });
};

export { useFetchQuery };
