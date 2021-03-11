const initState = {
  boardgames: [
    {id: '1', name: 'Gloomhaven', nOfPlayers: '1-4'},
    {id: '2', name: 'Scythe', nOfPlayers: '2-5'},
    {id: '3', name: 'Unmatched', nOfPlayers: '2-4'},
    {id: '4', name: 'Eldritch Horror', nOfPlayers: '1-8'},
  ]
}

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GAME':
      console.log('game added', action.game)
      return state;
    case 'ADD_GAME_ERROR':
      console.log('add game error', action.err)
      return state;
    default:
      return state;
  }
};

export default gamesReducer;