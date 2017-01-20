let API_BASE_URL;

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://api.botanicus.dev:8000';
} else {
  API_BASE_URL = 'http://api.botanicus.me';
}

export const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-63572342-2';
export const GOOGLE_ANALYTICS_COOKIE_DOMAIN = 'blog.botanicus.me';

export { API_BASE_URL };
