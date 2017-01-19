let API_BASE_URL;

switch (process.env.NODE_ENV) {
  case 'development':
    API_BASE_URL = 'http://api.botanicus.dev:8000';
    break;
  default:
    API_BASE_URL = 'http://api.botanicus.me';
}

export { API_BASE_URL };
