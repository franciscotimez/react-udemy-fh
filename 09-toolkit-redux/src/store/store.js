import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon";
import { counterSlice } from "./slices/counter/counterSlice";
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});