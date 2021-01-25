import React, { useContext } from 'react';

const Theme = (props) => {
  return (<span className={`${props.value} switch`} onClick={props.onChange}>{props.value}</span>);
}

export default Theme;