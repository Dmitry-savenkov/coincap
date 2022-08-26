export const API_URL = 'https://api.coincap.io/v2/assets';

export const fetchCryptoCyrrencies = async (offset: number) => {
  return fetch(`${API_URL}?offset=${offset}&limit=10`);
};

export const fetchCryptoCyrrencyHistory = async (id: string) => {
  return fetch(`${API_URL}/${id}/history?interval=h12`);
};
