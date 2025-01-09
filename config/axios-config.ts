import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_VERSION = process.env.TMDB_VERSION;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const movieAxios = axios.create({
  baseURL: `${TMDB_BASE_URL}/${TMDB_VERSION}`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const internalAxios = axios.create({
  baseURL: `${SITE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
