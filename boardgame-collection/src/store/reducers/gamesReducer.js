const initState = {
  boardgames: [
    {id: '1', name: 'Gloomhaven', nOfPlayers: '1-4'},
    {id: '2', name: 'Scythe', nOfPlayers: '2-5'},
    {id: '3', name: 'Unmatched', nOfPlayers: '2-4'},
    {id: '4', name: 'Eldritch Horror', nOfPlayers: '1-8'},
  ]
}

const gamesReducer = (state = initState, action) => {
  return state
};

export default gamesReducer;