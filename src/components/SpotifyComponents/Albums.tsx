import { AlbumsListType } from "types";
import SpotifyComponentStyles from "styles/spotify.component.module.scss";
import NotFoundIcon from 'assets/not_found.png'
interface AlbumsProps {
    initial_resp: AlbumsListType;
}

const Albums: React.FC<AlbumsProps> = ({ initial_resp }) => {
    return (
        <div className={SpotifyComponentStyles.container}>
            <h2>Albums</h2>
            <div className={SpotifyComponentStyles.items_grid}>
                {initial_resp.items.map((album, idx) => (
                    <div key={idx}>
                        <img src={album.images.length ? album.images[0].url : NotFoundIcon} alt="image not found" />
                        <p>{album.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Albums;
