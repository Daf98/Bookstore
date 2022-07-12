// Write action creator to check state
export const checkState = () => ({
  type: 'STATUS_CHECKED',
  text: 'Under construction',
});

// Create reducer for homepage
const homeReducer = (state = [], action) => {
  if (action.type === 'STATUS_CHECKED') {
    return action.text;
  }
  return state;
};
export default homeReducer;
