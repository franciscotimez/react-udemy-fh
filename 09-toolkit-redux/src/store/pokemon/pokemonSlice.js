import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: true,
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action);
        },
    }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
