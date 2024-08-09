// Other imports
import './style.scss';

function SearchBar() {
  return (
    <form className="">
      <label htmlFor="exampleFormControlInput1" className="form-label">Litrage de votre aquarium</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="120" />
      <button type="submit" value="submit" className="btn btn-primary">Rechercher</button>
    </form>
  );
}

export default SearchBar;
