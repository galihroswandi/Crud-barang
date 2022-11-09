import axios from 'axios';

export const getDataFromAPI = () => {
    return new Promise ((resolve, reject) => {
        axios.get('http://localhost:3004/barang')
        .then(response => {
            resolve(response);
        })
    })
}