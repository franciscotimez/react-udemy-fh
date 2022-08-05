// import { heroes } from './data/heroes';
import heroes, { owner } from '../data/heroes';

// console.log(heroes);
// console.log(owner);

export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id);
};

// console.log(getHeroesById(2));

export const getHeroresByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner)
}

// console.log(getHeroresByOwner('Marvel'));
