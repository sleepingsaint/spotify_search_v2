import { EpisodesListType } from "types";

interface EpisodesProps {
    initial_resp: EpisodesListType
}

const Episodes: React.FC<EpisodesProps> = ({initial_resp}) => {
    return <div>
        <h2>Episodes</h2>
        {initial_resp.items.map((episode, idx) => <p key={idx}>{episode.name}</p>)}
    </div>
}

export default Episodes;