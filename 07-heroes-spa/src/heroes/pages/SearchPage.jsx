import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {
            showSearch && (
              <div className="alert alert-primary">
                Search results
              </div>
            )
          }

          {
            showError && (
              <div className="alert alert-danger">
                No results found
              </div>
            )
          }

          {
            heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))
          }
        </div>
      </div>
    </>
  );
};
