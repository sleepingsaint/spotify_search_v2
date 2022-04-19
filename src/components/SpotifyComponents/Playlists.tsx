import { PlaylistsListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import NotFoundIcon from 'assets/not_found.png'

interface PlaylistsProps {
    initial_resp: PlaylistsListType;
}

const Playlists: React.FC<PlaylistsProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Playlists</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((playlist, idx) => (
                    <div key={idx}>
                        <img src={playlist.images.length ? playlist.images[0].url : NotFoundIcon} alt="Image not found" />
                        <p>{playlist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlists;
