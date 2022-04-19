import { EpisodesListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import NotFoundIcon from 'assets/not_found.png'

interface EpisodesProps {
    initial_resp: EpisodesListType;
}

const Episodes: React.FC<EpisodesProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Episodes</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((episode, idx) => (
                    <div key={idx}>
                        <img src={episode.images.length ? episode.images[0].url : NotFoundIcon} alt="image not found" />
                        <p>

                        {episode.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Episodes;
