import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ childeren }) {
  return <AuthContext.Provider value={{}}>{childeren}</AuthContext.Provider>;
}