# Spotify Search V2

This is a hobby project to try out the cloudflare workers for authentication and to experiment with storing only refresh token but not access token (access token is stored in memory not in local storage or in cookies).

Since, this is a experimental project I didn't dedicated much time on improving the UI.

The project can be accessed from [here](https://spotify-search-v2.pages.dev/).

## Tech Stack

* ReactJS - frontend framework
* Typescript - for type safety
* Cloudflare workers - for serverless functions
* ViteJS - build tool
* Spotify API - for searching the tracks, albums etc.

## Drawbacks

* The refreshAccessToken is being called for every route change, which should not occur except for the first time.

### Features to Implement (May be)

* Infinite loading for results
* Modify the UI

> Icons are taken from icons8.com and worldvectorlogo.com

## Spotify Search V1

If you want to go checkout the version 1 (with better UI and solid functioning) of Spotify Search please this [link](https://github.com/sleepingsaint/spotify_search) for source code and live website can be accessed [here](https://stringify.pages.dev/)