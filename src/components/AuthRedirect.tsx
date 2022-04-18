import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const AuthRedirect: React.FC = () => {
    const {isLoggedIn, getAccessToken, setAccessToken} = useAuth();
    useEffect(() => {
        getAccessToken().then(token => {
            setAccessToken(token);
        }).catch(err => console.error("[error]", err));
    }, []);

    if(isLoggedIn) return <Navigate to={'/home'} />
    return <div> Auth redirect</div>
}
export default AuthRedirect;