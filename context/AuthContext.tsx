import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

interface User {
    // Define the properties of your user object here
    // For example:
    // id: string;
    // username: string;
}

function useProtectedRoute(user: User | null | undefined) {
    const rootSegment = useSegments()[0];
    const router = useRouter();

    React.useEffect(() => {
        if (user === undefined) {
            return;
        }

        if (
                // If the user is not signed in and the initial segment is not anything in the auth group.
                !user &&
                rootSegment !== "(auth)"
        ) {
            // Redirect to the sign-in page.
            router.replace("/login");
        } else if (user && rootSegment !== "(tabs)") {
            // Redirect away from the sign-in page.
            router.replace("/(tabs)");
        }
    }, [user, rootSegment]);
}

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    signIn: () => void;
    signOut: () => void;
    user: User | null | undefined;
}

export function AuthProvider(props: AuthProviderProps) {
    const { getItem, setItem, removeItem } = useAsyncStorage("USER");
    const [user, setAuth] = React.useState<User | null | undefined>(undefined);

    React.useEffect(() => {
        getItem().then((json) => {
            console.log("json", json);
            if (json != null) {
                setAuth(JSON.parse(json) as User);
            } else {
                setAuth(null);
            }
        });
    }, [getItem]);

    useProtectedRoute(user);

    return (
            <AuthContext.Provider
                    value={{
                        signIn: () => {
                            const newUser: User = {}; // Assuming User can be an empty object for now
                            setAuth(newUser);
                            setItem(JSON.stringify(newUser));
                        },
                        signOut: () => {
                            setAuth(null);
                            removeItem();
                        },
                        user,
                    } as AuthContextType}
            >
                {props.children}
            </AuthContext.Provider>
    );
}