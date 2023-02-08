import axios from 'axios';

type OptionsType = {
  params?: { [key: string]: string | number };
  headers?: { [key: string]: string };
};

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options: OptionsType = {
  params: { maxResults: 50 },
  headers: {
    'X-RapidAPI-Key': '3b3e6604d4msh4c8225d4fe625ebp1b7278jsna00a01254966',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

//calling the api here

export const fetchFromAPI = async (url: string) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data;
};
