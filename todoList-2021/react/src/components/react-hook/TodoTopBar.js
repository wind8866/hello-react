import React, { useContext, useState } from 'react';
import ViewAll from './store';
import Theme from './Theme.js'

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
  const theme = 'light'
  return (<header>
    <div>
      <input
        ref={ref}
        value={input}
        onKeyPress={inputKeypress}
        onChange={inputChangeHandle}
        placeholder="Please enter todo"
      />
      <button onClick={add}>Add</button>
    </div>
    <div>
      <label>
        Show All
        <input onChange={props.changeShow} type="checkbox" checked={showAll}/>
      </label>
    </div>
    <div>
      <label>
        Theme: 
        <Theme
          value={theme}
          onChange={checked => console.log(checked)}
        />
      </label>
    </div>
  </header>);
});

export default TodoTopBar;