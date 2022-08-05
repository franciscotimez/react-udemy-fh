import { getHeroesById } from "./bases/08-imp-exp";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Dos Segundos despues')
//         const heroe = getHeroesById(2)
//         if(heroe)
//             resolve(heroe)
//         reject("No hay heroes.")

//     }, 2000)
// });


// promesa.then((res) => {
//     console.log("Then de la promesa");
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Dos Segundos despues');
            const heroe = getHeroesById(id);
            if (heroe)
                resolve(heroe);
            reject("No hay heroes.");

        }, 2000);
    });
};


getHeroesByIdAsync(2)
.then((res) => {
    console.log("Then de la promesa");
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

getHeroesByIdAsync(5)
.then( console.log )
.catch( console.warn )