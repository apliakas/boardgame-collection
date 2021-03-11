export const createGame = (game) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      firestore.collection('Boardgames').add({
        ...game,
        uploadedBy: 'Pliakas',
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'ADD_GAME', game })
      }).catch((err) => {
        dispatch({ type: 'ADD_GAME_ERROR', err })
      })
  }
};