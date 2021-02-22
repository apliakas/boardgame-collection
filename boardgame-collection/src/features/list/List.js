import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBoardgame } from './listSlice'

const List = () => {
  const dispatch = useDispatch();
  const boardgames = useSelector(state => state.list.boardgames)
  const [newBoardgame, setNewBoardgame] = useState('')

  const handleButton = (event) => {
    dispatch(addBoardgame(newBoardgame));
    setNewBoardgame('');
  };

  return (
    <div>
      <div>
        <input onChange={(e) => setNewBoardgame(e.target.value)} value={newBoardgame}></input>
        <button onClick={handleButton}>Add Boardgame</button>
      </div>
      <ul>
        {boardgames?.map((boardgame, index) => (<li key={index}>{boardgame}</li>))}
      </ul>

    </div>
  )
};

export default List;