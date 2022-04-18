import { ShowsListType } from "types";

interface ShowsProps {
    initial_resp: ShowsListType;
}

const Shows: React.FC<ShowsProps> = ({ initial_resp }) => {
    return (
        <div>
            <h2>Shows</h2>
            {initial_resp.items.map((show, idx) => <p key={idx}>{show.name}</p>)}
        </div>
    );
};

export default Shows;
