import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CreateList.module.scss';

const Games = (props) => {

  const { games } = props

  console.log(games)

  return (
    <div className={styles.createList}>
      <h3>Create list page</h3>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    games: state.games.boardgames
  }
}

export default connect(mapStateToProps)(Games)