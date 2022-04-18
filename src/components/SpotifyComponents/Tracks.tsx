import { TracksListType } from "types";

interface TracksProps {
    initial_resp: TracksListType
}

const Tracks: React.FC<TracksProps> = ({initial_resp}) => {
    return <div>
        <h2>Tracks</h2>
        {initial_resp.items.map((track, idx) => <p key={idx}>{track.name}</p>)}    
    </div>
}

export default Tracks;