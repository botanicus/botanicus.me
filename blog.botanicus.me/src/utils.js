import { API_BASE_URL } from './constants';


console.log(['API_BASE_URL', API_BASE_URL]);
export const serverURL = (path) => {
  return `${API_BASE_URL}${path}`;
}
