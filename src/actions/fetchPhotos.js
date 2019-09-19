import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/photos';

export default function fetchPhotos() {
  return async function(dispatch) {
    dispatch({ type: 'LOADING_PHOTOS' });
    const { data } = await axios(url);
    dispatch({ type: 'LOADED_PHOTOS', payload: data });
  }
}
