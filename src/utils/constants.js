export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const API_KEY = "525fd47539a462f413272290cd11fd6d";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjVmZDQ3NTM5YTQ2MmY0MTMyNzIyOTBjZDExZmQ2ZCIsInN1YiI6IjY2MzU5YzVkMGY1MjY1MDEyYmJiMjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46H3Yk9Yzv_Ob4xT9SrfFPxaOCpv_GDn8UBHdaYb0BA";
export const USER_AVATAR =
  "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png";
export const HERO_IMAGE =
  "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXoIQRE5j7JdRJb3VDzPE5QuXGLHh--DzSwzUN4dHR32vHeYLGi8_pqIx7KUkB5wInpMRtHhaQeHOHb_ALx9J05IoMMNfbCsVEfx.webp?r=b2a";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};

export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=3";
export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=2";

export const MOVIE_VIDEOS =
  "https://api.themoviedb.org/3/movie/movie_id/videos";

export const BASE_URL = "https://image.tmdb.org/t/p/";

export const FILE_SIZE = {
  original: "original",
  w500: "w500",
};
