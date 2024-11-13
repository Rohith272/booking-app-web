"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};
type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState("");
  return (
    <AuthContext.Provider
      value={{ user, setUser, accessToken, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
