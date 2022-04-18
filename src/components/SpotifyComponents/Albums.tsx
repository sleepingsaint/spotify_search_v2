import { AlbumsListType } from "types";

interface AlbumsProps{
    initial_resp: AlbumsListType
}

const Albums: React.FC<AlbumsProps> = ({initial_resp}) => {
    return <div>
        <h2>Albums</h2>
        {initial_resp.items.map((album, idx) => <p key={idx}>{album.name}</p>)}
    </div>
}
export default Albums;