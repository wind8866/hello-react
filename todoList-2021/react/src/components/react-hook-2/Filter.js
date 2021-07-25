import { useContext } from 'react';
import actions from './actions';
import Context from './todoContext';

const Filter = () => {
  const [{ filter }, dispatch] = useContext(Context);

  const filterChange = (e) => {
    dispatch(actions.filterToggle());
  }
  return (<label>
    view finish
    <input checked={filter} onChange={filterChange} type="checkbox" />
  </label>);
}

export default Filter;