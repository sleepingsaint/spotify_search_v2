import { useEffect, useState } from "react";
import { APIService } from "services/APIService";
import { AuthContext } from "contexts/AuthContext";
import { AuthContextProviderProps } from "types";
import { useQuery } from "react-query";

const AuthContextProvider: React.FC<AuthContextProviderProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string>();
    const [apiService, setApiService] = useState<APIService>();

    const _checkAuthOnFirstVisit = async () => {
        if (props.refreshAccessToken) {
            let _accessToken = await props.refreshAccessToken(true);
            setAccessToken(_accessToken);
        }
    };

    const {isLoading, isError, error} = useQuery("authOnFirstVisit", _checkAuthOnFirstVisit, {
        enabled: props.checkAuthOnFirstVisit,
    });

    useEffect(() => {
        if (accessToken) {
            setIsLoggedIn(true);
            const _apiService = new APIService(accessToken)
            setApiService(_apiService);
        } else {
            setIsLoggedIn(false);
            setApiService(undefined);
        }
    }, [accessToken]);

    if(isLoading) {
        return <div>Refreshing user session</div>
    }

    if(isError){
        console.log(error);
        return <div>Oops! something went wrong.
            Try logging In again.
            <button onClick={props.login}>Login</button>
        </div>
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                accessToken,
                setAccessToken,
                apiService,
                login: props.login,
                logout: props.logout,
                refreshAccessToken: props.refreshAccessToken,
                getAccessToken: props.getAccessToken,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
