

const getImageAsync = async () => {
    try {
        const apiKey = 'DV9FARghy8xW0HaLlMBUJM2mFvm2cVx4';
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await peticion.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(img);
    }
    catch (e) {
        console.log("error")
        console.error(e);
    }
};

getImageAsync();