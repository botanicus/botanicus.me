import { API_BASE_URL } from 'constants';

export const serverURL = (path) => {
  return `${API_BASE_URL}${path}`;
}
