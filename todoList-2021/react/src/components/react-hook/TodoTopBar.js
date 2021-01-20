import React from 'react';

const TodoTopBar = React.forwardRef((props, ref) => {
  return (<header>
    <input
      ref={ref}
      value={props.value}
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
      placeholder="Please enter todo"
    />
    <button onClick={props.add}>Add</button>
    <label>
      Show All
      <input onChange={props.changeShow} type="checkbox" checked={props.showAll}/>
    </label>
  </header>);
});

export default TodoTopBar;