import { createContext } from "react";
import { AuthContextType } from "types";

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    getAccessToken: async () => "",
    login: () => {},
    logout: () => {},
    setAccessToken: () => {},
});