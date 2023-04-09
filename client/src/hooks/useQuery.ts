import axios from "axios";
import { useRecoilValue } from "recoil";
import { useQuery, useMutation } from "@tanstack/react-query";
import { loginState } from "@/recoil/state";

// const NODE_SERVER = "http://localhost:8081/api/v1";
const NODE_SERVER = "https://k-link-coding-test-production.up.railway.app";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const useFetchQuery = (endpoint: string) => {
  const { token } = useRecoilValue(loginState);
  const authConfig = {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
  };

  return useQuery({
    queryKey: [endpoint],
    queryFn: () =>
      axios
        .get(`${NODE_SERVER}${endpoint}`, authConfig)
        .then((res) => res.data),
    retry: false,
  });
};

const useMutationQuery = (endpoint: string) => {
  const { token } = useRecoilValue(loginState);
  const authConfig = {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
  };

  return useMutation({
    mutationFn: (body) =>
      axios
        .post(`${NODE_SERVER}${endpoint}`, body, authConfig)
        .then((res) => res.data),
  });
};

export { useFetchQuery, useMutationQuery };
