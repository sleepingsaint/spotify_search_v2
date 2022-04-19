import { ShowsListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import NotFoundIcon from 'assets/not_found.png'

interface ShowsProps {
    initial_resp: ShowsListType;
}

const Shows: React.FC<ShowsProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Shows</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((show, idx) => (
                    <div key={idx}>
                        <img src={show.images.length ? show.images[0].url : NotFoundIcon} alt="Image not found" />
                        <p>{show.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shows;
