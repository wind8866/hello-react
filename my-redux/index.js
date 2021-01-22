let state = {
  title: 'redux',
  content: 'This is my redux',
};

const renderTitle = (text) => {
  const rootDOM = document.querySelector('#title');
  rootDOM.innerText = text;
};

const renderContent = (text) => {
  const rootDOM = document.querySelector('#content');
  rootDOM.innerText = text;
};

// 可被随意修改
state.title = 'react'

const render = () => {
  renderTitle(state.title);
  renderContent(state.content);
};

render();