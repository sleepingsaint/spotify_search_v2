import { useAuth } from "hooks/useAuth";
import { UserProfile } from "./UserProfile";
import Styles from "styles/navbar.module.scss";

const Navbar: React.FC<React.CSSProperties> = (props) => {
    const { isLoggedIn, login, logout } = useAuth();

    return (
        <div className={Styles.container} style={{ ...props }}>
            <a href={window.location.origin}>Spotify Search V2</a>
            {isLoggedIn ? (
                <div style={{ float: "right" }}>
                    <UserProfile />
                    {/* <button onClick={logout} style={{display: "inline"}}>Logout</button> */}
                </div>
            ) : (
                <button onClick={login} style={{ float: "right" }}>
                    Login
                </button>
            )}
        </div>
    );
};

export default Navbar;
