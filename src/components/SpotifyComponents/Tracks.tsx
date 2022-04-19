import { TracksListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import TrackIcon from 'assets/track_icon.png'
interface TracksProps {
    initial_resp: TracksListType;
}

const Tracks: React.FC<TracksProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Tracks</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((track, idx) => (
                    <div key={idx}>
                        <img src={TrackIcon} alt="Image not found" />
                        <p>{track.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tracks;
