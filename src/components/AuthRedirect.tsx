import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useQuery } from "react-query";
import AuthRedirectStyles from 'styles/authRedirect.module.scss';

const AuthRedirect: React.FC = () => {
    let url = new URL(window.location.href);
    let params = url.searchParams;

    const { getAccessToken, setAccessToken, login } = useAuth();

    const { data, isLoading, isError, error } = useQuery(
        "auth_redirect",
        () => getAccessToken(),
        { enabled: params.get("error") !== undefined }
    );

    if (isLoading) return <div className={AuthRedirectStyles.container}>Fetching Access Token</div>;
    if (isError) {
        console.log("[error]", error)
        return (
            <div className={AuthRedirectStyles.container}>
                <h2>Oops! Something went wrong</h2>
                <button onClick={login}>Please Login Again</button>
            </div>
        );
    }
    if (params.get("error")) return <div>{params.get("error")}</div>;

    setAccessToken(data);
    return <Navigate to={'/search'} />;
};
export default AuthRedirect;
