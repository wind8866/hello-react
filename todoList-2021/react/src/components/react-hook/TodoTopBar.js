import React, { useContext, useState } from 'react';
import ViewAll from './store';

const TodoTopBar = React.forwardRef((props, ref) => {
  const [input, inputChange] = useState('');
  const inputChangeHandle = (e) => inputChange(e.target.value);

  const showAll = useContext(ViewAll);

  const add = () => {
    if (input.trim()) {
      props.add(input.trim());
      inputChange('');
    } else {
      console.error('enter is empty')
    }
  }

  const inputKeypress = (e) => {
    if (e.charCode === 13) {
      add();
    }
  }
  return (<header>
    <input
      ref={ref}
      value={input}
      onKeyPress={inputKeypress}
      onChange={inputChangeHandle}
      placeholder="Please enter todo"
    />
    <button onClick={add}>Add</button>
    <label>
      Show All
      <input onChange={props.changeShow} type="checkbox" checked={showAll}/>
    </label>
  </header>);
});

export default TodoTopBar;