
const apiKey = 'DV9FARghy8xW0HaLlMBUJM2mFvm2cVx4';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then((response) => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(img);
    })
    .catch(console.warn);