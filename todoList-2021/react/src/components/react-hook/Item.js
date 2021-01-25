import React, { useContext } from 'react';
import ViewAll from './store';

const Item = (props) => {
  const show = useContext(ViewAll);
  if (!show && props.finish) {
    return null;
  }
  const onDel = (e) => {
    console.log(e);
    e.stopPropagation()
    props.onDel(props.id)
  }
  return (<li
    className={props.finish ? 'already' : ''}
    onClick={() => props.onClick(props.id)}
  >
    {props.id}: {props.text} 
    <span onClick={onDel} style={{color: '#f00', float: 'right'}}>Del</span>
  </li>);
}

export default Item;