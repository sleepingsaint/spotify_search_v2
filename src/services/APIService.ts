import { SpotifyResponseType, UserProfileType } from "types";

export class APIService {
    access_token: string;

    constructor(access_token: string) {
        this.access_token = access_token;
    }

    async getProfile() {
        if (!this.access_token) {
            return;
        }
        const resp = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: "Bearer " + this.access_token,
            },
        });
        const data: UserProfileType = await resp.json();
        return data;
    }

    async getSearchItems(search_query: string) {
        if (!this.access_token) {
            return;
        }
        const search_items = [
            "album",
            "artist",
            "playlist",
            "track",
            "show",
            "episode",
        ];
        const search_url = new URL("https://api.spotify.com/v1/search");
        search_url.searchParams.append("q", search_query);
        search_url.searchParams.append("type", search_items.join(","));
        const resp = await fetch(search_url.href, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + this.access_token,
                'Content-Type': "application/json"
            },
        });

        const data: SpotifyResponseType = await resp.json();
        console.log(data)
        return data;
    }
}
