import { useDispatch } from "react-redux";
import { useRef } from 'react';
import actions from './actions';

const AddTodo = () => {
  const dispatch = useDispatch();
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