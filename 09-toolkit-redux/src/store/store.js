import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon/pokemonSlice";
import { counterSlice } from "./slices/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
})