import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const NODE_SERVER = "http://localhost:8081/api/v1";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiZXJyeWJlYmVAZ21haWwuY29tIiwiaWF0IjoxNjgwODk2Mzk3LCJleHAiOjE2ODA5ODI3OTd9.knMeoteeiR-m3mo6KTUd3lpz7pkS0Oab_PyVbiKnkhQ",
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
