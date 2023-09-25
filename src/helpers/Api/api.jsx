import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQwY2U3ODJkZmFiMzhhYTAxOGZjNWMxZDQyMzUxMiIsInN1YiI6IjY1MDIxYWYyZGI0ZWQ2MTA0MzA5YzBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wb5VKtSrLOBXBbiAg_8pnA8yQPnQH506-hGN5NpPd4g';

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/';
export const getDates = async (url, controller) => {
  const config = {
    language: 'en-US',
    signal: controller.signal,
  };
  return await axios.get(url, config);
  // const response = await axios.get(url, config);

  // return response.data;
};
