

const initState = (defaultState) => {
  let state = defaultState;

  const getState = () => state;
  const dispatch = (action) => {
    switch(action.type) {
      case 'SET_TITLE':
        state.title = action.title;
        break;
      case 'SET_CONTENT':
        state.content = action.content;
        break;
      default:
        console.info(new Error('No Actiion'));
    }
  }

  return {
    getState,
    dispatch,
  }
}


const renderTitle = (text) => {
  const rootDOM = document.querySelector('#title');
  rootDOM.innerText = text;
};

const renderContent = (text) => {
  const rootDOM = document.querySelector('#content');
  rootDOM.innerText = text;
};

const { getState, dispatch } = initState({
  title: 'redux',
  content: 'This is my redux',
});
dispatch({type: 'SET_TITLE', title: 'react3'});

const render = (state) => {
  renderTitle(state.title);
  renderContent(state.content);
};

render(getState());