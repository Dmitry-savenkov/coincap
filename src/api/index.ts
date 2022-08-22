export const API_URL = 'https://api.coincap.io/v2/assets';

export const fetchAllCyrrencies = async ({ offset }: { offset: number; limit: number }) => {
  return fetch(`${API_URL}?offset=${offset}&limit=10`).then((res) => {
    return res.json();
  });
};
