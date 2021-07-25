import { useContext, useRef } from 'react';
import actions from './actions';
import Context from './todoContext';

const AddTodo = () => {
  const [_, dispatch] = useContext(Context);
  
  const addHandle = () => {
    const node = ref?.current;
    if (node) {
      dispatch(actions.add(node.value));
      node.value = '';
    }
  }
  const ref = useRef(null);
  return <>
    <input ref={ref} />
    <button onClick={addHandle}>add</button>
  </>
}

export default AddTodo;