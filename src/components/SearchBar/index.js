/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';

// Other imports

import './style.scss';

function SearchBar() {
  const value = useSelector((state) => state.tankData[litreage]);
  const dispatch = useDispatch();

  return (
    <form className="">
      <label htmlFor="yourLitreage" className="form-label">Litrage de votre aquarium</label>
      <input type="number" className="form-control" id="yourLitreage" placeholder="120" litreage={litreage} value={value || ''} onChange={handleChange} />
      <button type="submit" value="submit" className="btn btn-primary">Rechercher</button>
    </form>
  );
}

export default SearchBar;
