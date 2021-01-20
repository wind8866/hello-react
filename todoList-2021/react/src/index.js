import React from 'react';
import ReactDOM from 'react-dom';

import TodoAppObject from './components/react-object/index.js';
import TodoAppHook from './components/react-hook/index.js';

ReactDOM.render((<div><TodoAppHook/></div>), document.querySelector('#root'));
