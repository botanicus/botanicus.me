const getAPIBaseURL = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://api.botanicus.dev:8000';
    default:
      return 'http://api.botanicus.me';
  }
}

export const API_BASE_URL = getAPIBaseURL();
