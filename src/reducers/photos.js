export default function photos(state = [], action) {
  switch(action.type) {
    case 'LOADED_PHOTOS':
      return action.payload;
    case 'LOADING_PHOTOS':
    default:
      return state;
  }
}
