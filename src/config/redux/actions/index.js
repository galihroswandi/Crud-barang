import axios from "axios";

export const getDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://localhost:3004/barang").then((response) => {
      resolve(response);
    });
  });
};

export const PostDataToAPI = (data) => (dispatch) => {
  axios.post("http://localhost:3004/barang", data).then((response) => {
    alert("data berhasil ditambahkan!");
  })
};
