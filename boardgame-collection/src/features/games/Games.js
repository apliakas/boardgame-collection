import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/gameActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import styles from './CreateList.module.scss';
import { Redirect } from 'react-router-dom';

const emptyBoardgame = {
  name: '',
  nOfPlayers: '',
  playtime: ''
}

const Games = (props) => {
  const [boardgame, setBoardgame] = useState(emptyBoardgame)

  const { games, auth } = props

  if (!auth.uid) {
    return <Redirect to='/signin' />
  }

  
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value

    setBoardgame({
      ...boardgame,
      [key]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createGame(boardgame)
  };

  return (
    <div className={styles.createList}>
      <h3>Games Page</h3>
      <div>
        {games?.map((game) => (
          <div key={game.id}>
            <h5>{game.name}</h5>
            <p>{game.nOfPlayers}</p>
            <p>{game.playtime}</p>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        <h5>Add Game</h5>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='name' id='name' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='nOfPlayers'>Number of Players</label>
          <input type='nOfPlayers' id='nOfPlayers' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='playtime'>Playtime</label>
          <input type='playtime' id='playtime' onChange={handleChange} ></input>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (game) => dispatch(createGame(game))
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.firestore.ordered.Boardgames,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'Boardgames' }
  ])
) (Games)