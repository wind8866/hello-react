

const initState = () => {
  let state = {
    title: 'redux',
    content: 'This is my redux',
  };
  const getState = () => state;
  const setTitle = title => { state.title = title };
  const setContent = content => { state.content = content };

  return {
    getState,
    setTitle,
    setContent,
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

const { getState, setTitle } = initState();
setTitle('react');

const render = () => {
  renderTitle(getState().title);
  renderContent(getState().content);
};

render();