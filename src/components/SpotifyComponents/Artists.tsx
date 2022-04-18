import { ArtistsListType } from "types";

interface ArtistsProps {
    initial_resp: ArtistsListType;
}
const Artists: React.FC<ArtistsProps> = ({ initial_resp }) => {
    return (
        <div>
            <h2>Artists</h2>
            {initial_resp.items.map((artist, idx) => <p key={idx}>{artist.name}</p>)}
        </div>
    );
};
export default Artists;
