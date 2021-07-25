import { useSelector, useDispatch } from "react-redux";
import actions from './actions';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterChange = (e) => {
    dispatch(actions.filterToggle());
  }
  return (<label>
    view finish
    <input checked={filter} onChange={filterChange} type="checkbox" />
  </label>);
}

export default Filter;