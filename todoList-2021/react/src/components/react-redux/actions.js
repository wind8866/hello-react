export default {
  filterToggle: () => ({ type: 'FILTERTOGGLE' }),
  add: (value) => ({ type: 'ADD', value }),
  addAsync: (value) => ({ type: 'ADD_ASYNC', value }),
  finish: (id) => ({ type: 'FINISH', id }),
  finishAsync: (id) => ({ type: 'FINISH_ASYNC', id }),
};