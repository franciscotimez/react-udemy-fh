import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons, isLoading, nextPage } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>
        {isLoading ? "Cargando..." : "Ready"}
      </span>
      <ul>
        {
          !isLoading &&
          pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <span>
        page: {nextPage - 1}
      </span>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(nextPage))}
      >
        Next
      </button>
    </>
  );
};
