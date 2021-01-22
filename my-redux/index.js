const renderTitle = (text, oldText = '') => {
  if (oldText === text) { return }
  console.log('render title')
  const rootDOM = document.querySelector('#title');
  rootDOM.innerText = text;
};

const renderContent = (text, oldText = '') => {
  if (oldText === text) { return }
  console.log('render content')
  const rootDOM = document.querySelector('#content');
  rootDOM.innerText = text;
};

const render = (state, oldState = {}) => {
  renderTitle(state.title, oldState.title);
  renderContent(state.content, oldState.content);
};

const createStore = (reducer) => {
  let state = null;
  const listeners = [];
  let oldState = state;
  const getState = () => state;
  const dispatch = (action) => {
    oldState = state;
    state = reducer(action, state);
    listeners.forEach(listener => listener(state, oldState));
  };
  dispatch();
  const subscribe = listener => listeners.push(listener);
  return {
    getState,
    dispatch,
    subscribe,
  }
}

const reducer = (action, state) => {
  if (!state) {
    return {
      title: 'redux',
      content: 'This is my redux',
    };
  }
  switch(action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
      }
      break;
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.content,
      }
      break;
    default:
      console.info(new Error('No Actiion'));
  }
}
const { getState, dispatch, subscribe } = createStore(reducer);

subscribe((state, oldState) => render(state, oldState));
// subscribe(() => console.log('render end'));


dispatch({type: 'SET_TITLE', title: 'react3'});

render(getState());