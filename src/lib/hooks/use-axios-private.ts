"use client";

import { useEffect } from "react";
import useAuth from "./use-auth";
import useRefreshToken from "./use-refresh-token";
import { axiosPrivate } from "../api";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { accessToken } = useAuth();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.request.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
