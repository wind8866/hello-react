import React, { useContext } from 'react';
import ViewAll from './store';

const Item = (props) => {
  const show = useContext(ViewAll);
  if (!show && props.finish) {
    return null;
  }
  return (<li
    className={props.finish ? 'already' : ''}
    onClick={() => props.onClick(props.id)}
  >
    {props.id}: {props.text}
  </li>);
}

export default Item;