
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=6huL4cgLDRFWGwWbYDDczAQat5eSmXBE&limit=10&q=${category}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(gif => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    ));

    console.log(gifs);
    return gifs;
};