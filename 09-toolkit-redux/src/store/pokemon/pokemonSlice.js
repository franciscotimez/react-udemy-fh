import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        nextPage: 0,
        pokemons: [],
        isLoading: true,
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.nextPage = action.payload.nextPage;
            state.pokemons = action.payload.pokemons;
            state.isLoading = false;


            console.log(action);
        },
    }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
