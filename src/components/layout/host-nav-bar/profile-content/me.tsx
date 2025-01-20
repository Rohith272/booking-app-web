"use client";

import useAxiosPrivate from "@/lib/hooks/use-axios-private";
import { useQuery } from "@tanstack/react-query";

const Me = () => {
  const api = useAxiosPrivate();
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: ()=>{
      return api.get("/api/v1/hosts/me")
    }
  });
  console.log(data)
  return <div>Me</div>;
};

export default Me;
