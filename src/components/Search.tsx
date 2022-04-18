import { useAuth } from "hooks/useAuth";
import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { SpotifyResponseType } from "types";
import {
    Albums,
    Artists,
    Episodes,
    Playlists,
    Shows,
    Tracks,
} from "components/SpotifyComponents";

const Search: React.FC = () => {
    const { apiService } = useAuth();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedSearchQuery = useDebounce(searchQuery);
    const [data, setData] = useState<SpotifyResponseType>();

    useEffect(() => {
        if (debouncedSearchQuery && apiService) {
            apiService
                .getSearchItems(debouncedSearchQuery)
                .then((_data) => setData(_data));
        }
    }, [debouncedSearchQuery]);

    return (
        <div>
            <h2>Search</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <hr />
            <h2>Results</h2>
            {data && data.albums && <Albums initial_resp={data.albums} />}
            {data && data.artists && <Artists initial_resp={data.artists} />}
            {data && data.shows && <Shows initial_resp={data.shows} />}
            {data && data.episodes && <Episodes initial_resp={data.episodes} />}
            {data && data.tracks && <Tracks initial_resp={data.tracks} />}
            {data && data.playlists && (
                <Playlists initial_resp={data.playlists} />
            )}
        </div>
    );
};

export default Search;
