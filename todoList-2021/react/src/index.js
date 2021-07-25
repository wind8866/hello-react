import React from 'react';
import ReactDOM from 'react-dom';


import TodoAppObject from './components/react-object/index.js';
import TodoAppHook from './components/react-hook/index.js';
import TodoAppRedux from './components/react-redux-saga/index.js';
import './components/react-hook/index.css';

ReactDOM.render(<TodoAppRedux/>, document.querySelector('#root'));
