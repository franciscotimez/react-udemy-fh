
export const getImagen = async () => {
    try {
        const apiKey = 'DV9FARghy8xW0HaLlMBUJM2mFvm2cVx4';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        // console.log(error);
        return 'No images found';
    }
};
