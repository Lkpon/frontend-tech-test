import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000
});

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
  hash: 'ba2cc30d0c99045ceaf15284ebb21094',
  ts: 1712746722
};

const get = (url, query) =>
  instance.get(url, {
    params: {
      ...query,
      ...baseQueryParams
    }
  });

const checkAPIAffiliation = async (setIds) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(
    'https://gateway.marvel.com/v1/public/characters?apikey=e9174b11f29fbeda1e52dbffb861cccf&hash=ba2cc30d0c99045ceaf15284ebb21094&ts=1712746722',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      // Accéder à la liste des résultats
      const results = data.data.results;
      const tempIds = [];
      results.forEach((result) => {
        console.log(result.thumbnail.path + '.' + result.thumbnail.extension);
        tempIds.push(result);
      });
      setIds(tempIds);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des données:', error);
    });
};

export { instance as api, get, checkAPIAffiliation };
