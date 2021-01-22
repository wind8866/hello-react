import React from 'react';
import ReactDOM from 'react-dom';

import TodoAppObject from './components/react-object/index.js';
import TodoAppHook from './components/react-hook/index.js';
import './components/react-hook/index.css';

ReactDOM.render((<div><TodoAppHook/></div>), document.querySelector('#root'));
