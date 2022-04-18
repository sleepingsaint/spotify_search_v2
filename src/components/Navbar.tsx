import { useAuth } from "hooks/useAuth";
import { UserProfile } from "./UserProfile";
import Styles from 'styles/navbar.module.scss';

const Navbar: React.FC = () => {
    const { isLoggedIn, login, logout } = useAuth();
    return (
        <div className={Styles.container}>
            Spotify Search V2
            {/* {isLoggedIn ? (
                <div>
                    <UserProfile />
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )} */}
        </div>
    );
};

export default Navbar;
