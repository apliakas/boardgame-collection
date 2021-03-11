export const createGame = (game) =>{
  return (dispatch, getState) => {
    //you can add here an async call to database
    dispatch({ type: 'ADD_GAME', game })
  }
};