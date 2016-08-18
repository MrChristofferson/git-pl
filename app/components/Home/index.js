import React, { Component } from 'react';
import styles from './Home.css';
const exec = require('child_process').exec;

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
