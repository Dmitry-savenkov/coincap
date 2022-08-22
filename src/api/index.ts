export const API_URL = 'https://api.coincap.io/v2/assets';

export const fetchAllCyrrencies = async ({
  offset,
  limit = 10,
}: {
  offset: number;
  limit: number;
}) => {
  return fetch(`${API_URL}?offset=${offset}&limit=${limit}`).then((res) => {
    return res.json();
  });
};
