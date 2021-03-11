import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../store/actions/gameActions';

import styles from './CreateList.module.scss';

const emptyBoardgame = {
  name: '',
  nOfPlayers: ''
}

const Games = (props) => {
  const [boardgame, setBoardgame] = useState(emptyBoardgame)

  const { games } = props

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
    games: state.games.boardgames
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)