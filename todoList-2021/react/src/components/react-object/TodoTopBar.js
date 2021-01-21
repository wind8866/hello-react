import React from 'react';
import PropTypes from 'prop-types';

const TodoTopBar = React.forwardRef((props, ref) => {
  return (<header>
    <input
      ref={ref}
      value={props.value}
      onKeyPress={e => props.onKeyPress(e, props)}
      onChange={props.onChange}
      placeholder="Please enter todo"
    />
    <button onClick={props.add}>Add</button>
    <button onClick={props.clearTodo}>Clear Todo</button>
    <label>
      Show All
      <input onChange={props.changeShow} type="checkbox" checked={props.showAll}/>
    </label>
  </header>);
});

TodoTopBar.displayName = 'TodoTopBar';
TodoTopBar.propTypes = {
  value: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  showAll: PropTypes.bool.isRequired,
  changeShow: PropTypes.func.isRequired,
  clearLocal: PropTypes.func,
}
// isRequired和defaultProps设置一个就可以
TodoTopBar.defaultProps = {
  onKeyPress(e, props) {
    // 可以获取到e, props, this
    console.log(e, props, this);
    if (e.charCode === 13) {
      props.add();
    }
  }
}

export default TodoTopBar;