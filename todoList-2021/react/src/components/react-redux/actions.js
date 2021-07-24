/**
 * action
 */
export default {
  filterToggle: () => ({ type: 'FILTERTOGGLE' }),
  add: (value) => ({ type: 'ADD', value }),
  finish: (id) => ({ type: 'FINISH', id }),
};