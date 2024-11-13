"use client";

import { LoadingSpinner } from "@/components/common/loading-spinner";
import Footer from "@/components/layout/footer";
import HostNavBar from "@/components/layout/host-nav-bar/header";
import useAuth from "@/lib/hooks/use-auth";
import useRefreshToken from "@/lib/hooks/use-refresh-token";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

const PersistLoginLayout = ({ children }: { children: ReactNode }) => {
  // console.log("persist login layout page");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { accessToken } = useAuth();
  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    if (accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
      // logout
      // naviagate to login
      // router.push("/login");
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${accessToken}`);
  }, [isLoading]);

  useEffect(() => {
    console.log("... initial render ...");
  }, []);

  return (
    <div className="min-h-screen">
      <HostNavBar />

      {isLoading ? (
        <div className="grid min-h-screen place-items-center">
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};

export default PersistLoginLayout;
