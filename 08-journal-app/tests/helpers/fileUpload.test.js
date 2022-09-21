import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'react-udemy-fh',
    api_key: '865926936818588',
    api_secret: '-sMcSsLaN-8jFsaQmGmoR0DwwcA',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('Debe subir el archivo correctamente a cloudinary', async () => {

        // Descargo el blob de una imagen
        const imageUrl = "https://media-cdn.tripadvisor.com/media/photo-s/18/5d/3a/98/bell-tent-large.jpg";
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "foto-test.jpg");

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const urlSplited = url.split('/');
        const imageId = urlSplited[urlSplited.length - 1].replace('.jpg', '');
        console.log(imageId);
        // Elimino el archivo de cloudinary
        const resCloud = await cloudinary.api.delete_resources([`journal-app/${imageId}`], {
            resource_type: 'image'
        });

        console.log({ resCloud });
    });

    test('Debe de retornar null', async () => {

        const file = new File([], "foto-test.jpg");

        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});