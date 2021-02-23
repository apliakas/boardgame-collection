import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBoardgame, deleteBoardgame } from './listSlice';
import styles from './List.module.scss';

const List = () => {
  const dispatch = useDispatch();
  const boardgames = useSelector(state => state.list.boardgames)
  const [newBoardgame, setNewBoardgame] = useState('')

  const handleAddButton = (event) => {
    dispatch(addBoardgame(newBoardgame));
    setNewBoardgame('');
  };

  const handleDeleteButton = (boardgame) => {
    dispatch(deleteBoardgame(boardgame))
  }

  return (
    <div className={styles.list}>
      <div className={styles.list_add}>
        <input className={styles.list_add_input} onChange={(e) => setNewBoardgame(e.target.value)} value={newBoardgame}></input>
        <button className={styles.list_add_button} onClick={handleAddButton}>Add Boardgame</button>
      </div>
      <ul className={styles.list_collection}>
        {boardgames?.map((boardgame, index) => (
        <div className={styles.list_collection_item} key={index}>
          <li>{boardgame}</li>
          <button onClick={() => handleDeleteButton(boardgame)}  className={styles.list_collection_item_delete}>X</button>
        </div>
          ))}
      </ul>

    </div>
  )
};

export default List;