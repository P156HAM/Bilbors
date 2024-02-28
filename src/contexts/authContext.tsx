// contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface User {
  role: string;
}

interface AuthContextType {
  user: User | null;
  loggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // On component mount, check if the user cookie exists
    const userCookie = Cookies.get("user");
    if (userCookie) {
      // If the cookie exists, parse it back into an object and set the user state
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    // Set a cookie with the user information
    Cookies.set("user", JSON.stringify(newUser), { expires: 7 }); // Expires in 7 days
  };

  const logout = () => {
    setUser(null);
    // Remove the user cookie on logout
    Cookies.remove("user");
  };

  const value = {
    user,
    loggedIn: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
