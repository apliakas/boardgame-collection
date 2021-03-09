import React, { Component } from 'react';
import List from './list/List';
import Counter from './counter/Counter';

import styles from './CreateList.module.scss';

const CreateList = (props) => {
  console.log(props)
  return (
    <div className={styles.createList}>
      <List />
      <Counter />
    </div>
  )

};

export default CreateList;