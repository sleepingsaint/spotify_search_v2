import { ArtistsListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import NotFoundIcon from 'assets/not_found.png'

interface ArtistsProps {
    initial_resp: ArtistsListType;
}
const Artists: React.FC<ArtistsProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Artists</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((artist, idx) => (
                    <div key={idx}>
                        <img src={artist.images.length ? artist.images[0].url : NotFoundIcon} alt="image not found" />
                        <p>{artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Artists;
