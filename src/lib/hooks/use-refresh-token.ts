"use client";

import { axiosPublic } from "@/lib/api";
import useAuth from "./use-auth";

const useRefreshToken = () => {
  const { setAccessToken } = useAuth();
  const refresh = async () => {
    const response = await axiosPublic.get("/api/v1/hosts/refresh", {
      withCredentials: true,
    });
    // TODO: set access token
    setAccessToken(response.data.accessToken);
  };

  return refresh;
};

export default useRefreshToken;
