import axios from 'axios';

export const postDataToAPI = (data) => (dispatch) => {
    return new Promise ((resolve, reject) => {
        axios.post(`http://localhost:3004/posts`, data)
        .then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
    }) 
}