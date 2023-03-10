import React from "react";

type LoginResponseData = {
    success?: boolean
    error?: boolean
    errorMessage?: string
}

type AuthContextData = {
    accessToken: string | null
    refreshToken: string | null
    userId: string | null
    setUserAuthData: (userId: string, accessToken: string, refreshToken: string) => void
    login: (username: string, password: string) => Promise<LoginResponseData>
    logout: () => void
    isLoggedIn: () => boolean
}

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren> = (props: { children?: React.ReactNode }) => {

    const [accessToken, setAccessToken] = React.useState<string | null>(null);
    const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
    const [userId, setUserId] = React.useState<string | null>(null);

    const setUserAuthData = (_userId: string, _accessToken: string, _refreshToken: string) => {
        setUserId(_userId);
        setAccessToken(_accessToken);
        setRefreshToken(_refreshToken);
    }

    const login = (username: string, password: string) => {
        return new Promise<LoginResponseData>((accept, reject) => {
            setTimeout(() => {
                if (username === "321" && password === "321") {
                    setUserId("1234567890");
                    setAccessToken("accessToken032998");
                    setRefreshToken("refreshToken97998");
                    accept({ success: true } as LoginResponseData);
                } else {
                    accept({ error: true, errorMessage: "Wrong password" } as LoginResponseData);
                }
            }, 2000);
        });
    }

    const logout = () => {
        setTimeout(() => {
            setAccessToken(null);
            setRefreshToken(null);
            setUserId(null);
        }, 1000);
    }

    const isLoggedIn = () => {
        return userId !== null;
    }

    return (
        <AuthContext.Provider value={{
            accessToken,
            refreshToken,
            userId,
            setUserAuthData,
            login,
            logout,
            isLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}