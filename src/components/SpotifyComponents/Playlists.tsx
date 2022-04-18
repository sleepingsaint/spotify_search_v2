import { PlaylistsListType } from "types";

interface PlaylistsProps {
    initial_resp: PlaylistsListType
}

const Playlists: React.FC<PlaylistsProps> = ({initial_resp}) => {
    return <div>
        <h2>Playlists</h2>
        {initial_resp.items.map((playlist, idx) => <p key={idx}>{playlist.name}</p>)}
    </div>
}

export default Playlists;