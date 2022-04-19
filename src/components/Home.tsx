import ReactIcon from "assets/react.svg";
import ViteIcon from "assets/vitejs.svg";
import CloudflareIcon from "assets/cloudflare-pages-single.svg";
import SpotifyIcon from "assets/spotify.svg";
import TypescriptIcon from "assets/typescript.svg";
import Styles from "styles/home.module.scss";
import Navbar from "./Navbar";
import { useAuth } from "hooks/useAuth";

const Home: React.FC = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className={Styles.container}>
            <Navbar flexGrow={0} flexShrink={1} />
            <div className={Styles.content}>
                <h1>Spotify Search V2</h1>
                <p>Search tracks, albums, podcasts using Spotify API</p>

                <h3>Made With</h3>
                <div className={Styles.icon_grid}>
                    <img
                        src={SpotifyIcon}
                        alt="Spotify Icon"
                        title="Spotify API"
                    />
                    <img src={ReactIcon} alt="React Icon" title="React JS" />
                    <img
                        src={TypescriptIcon}
                        alt="Typescript Icon"
                        title="Typescript"
                    />
                    <img src={ViteIcon} alt="Vite Icon" title="ViteJS" />
                    <img
                        src={CloudflareIcon}
                        alt="Cloudflare Icon"
                        title="Cloudflare Pages"
                    />
                </div>
                {isLoggedIn && (
                    <button
                    style={{marginTop: "20px"}}
                        onClick={() =>
                            (window.location.href =
                                window.location.origin + "/search")
                        }
                    >
                        Start Searching
                    </button>
                )}
            </div>
        </div>
    );
};
export default Home;
