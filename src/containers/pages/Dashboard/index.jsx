import React, { Component } from "react";
import { getDataFromAPI } from "./../../../config/redux/actions/";
import { Container } from 'react-bootstrap';
import CardComponent from "../../../components/molecule/card";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    data: [],
    isUpdate: false,
  };

  componentDidMount() {
    getDataFromAPI().then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="mb-5">
        <Container>
          <div className="mt-4 d-flex justify-content-between my-4">
            <h1>Daftar Barang</h1>
            <div className="tambah-barang">
              <Link to="/tambah_barang" className="btn btn-dark">Tambah Barang</Link>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {data.map((brg, index) => {
              return (
                <CardComponent id={index} nama_barang={brg.nama_barang} harga={brg.harga} deskripsi={brg.deskripsi} />
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
