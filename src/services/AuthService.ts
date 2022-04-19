import {
    GetAccessTokenResponseType,
    RefreshAcessTokenResponseType,
} from "types";

export class AuthService {
    // redirect the user to spotify consent screen
    static async login() {
        let login_url = new URL("https://accounts.spotify.com/authorize");
        login_url.searchParams.set("response_type", "code");
        login_url.searchParams.set(
            "client_id",
            import.meta.env.VITE_SPOTIFY_CLIENT_ID
        );
        login_url.searchParams.set(
            "redirect_uri",
            window.location.origin + "/auth/redirect"
        );
        login_url.searchParams.set('scope', 'user-read-private');
        window.location.href = login_url.href;
    }

    // clears the refresh token stored in localstorage
    static async logout() {
        localStorage.removeItem("spotify_search_v2_refresh_token");
        window.location.href = window.location.origin;
    }

    // retrieves the access token from authorization code
    // obtained after taking the consent from user
    static async getAccessToken() {
        let url = new URL(window.location.href);
        let params = url.searchParams;
        const req_body = new FormData();
        req_body.append("grant_type", "authorization_code");
        req_body.append("code", params.get("code")!);
        req_body.append(
            "redirect_uri",
            window.location.origin + "/auth/redirect"
        );

        const resp = await fetch(import.meta.env.VITE_OAUTH_ACCESS_ENDPOINT, {
            method: "POST",
            body: JSON.stringify({
                grant_type: "authorization_code",
                code: params.get("code"),
                redirect_uri: window.location.origin + "/auth/redirect",
            }),
        });
        const data: GetAccessTokenResponseType = await resp.json();
        console.log(data)
        if (data.refresh_token) {
            localStorage.setItem(
                "spotify_search_v2_refresh_token",
                data.refresh_token
            );
        }
        return data.access_token;
    }

    // refresh access token using the refresh token
    // if no refresh access token is obtained then redirect them to login page
    static async refreshAccessToken(first_visit=false) {
        const refresh_token = localStorage.getItem(
            "spotify_search_v2_refresh_token"
        );
        if (refresh_token) {
            const resp = await fetch(
                import.meta.env.VITE_OAUTH_REFRESH_ENDPOINT,
                {
                    method: "POST",
                    body: JSON.stringify({
                        grant_type: "refresh_token",
                        refresh_token,
                    }),
                }
            );
            const data: RefreshAcessTokenResponseType = await resp.json();
            return data.access_token;
        } else if(!first_visit) this.login();
    }
}

// export const AuthService = new AuthUtils();
