/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SPOTIFY_CLIENT_ID: string;
    readonly VITE_OAUTH_ACCESS_ENDPOINT: string;
    readonly VITE_OAUTH_REFRESH_ENDPOINT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
