const ENDPOINT = 'https://eeb98180-236b-43f6-be83-01af4d1d548f.mock.pstmn.io/test';

const fetchMovies = () => fetch(ENDPOINT)
  .then(response => response.json())

  export {fetchMovies};
