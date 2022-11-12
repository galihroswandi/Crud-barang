import React, { Component } from "react";
import "./tambah_barang.css";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { PostDataToAPI } from '../../../config/redux/actions';

class TambahBarang extends Component {
  state = {
    id_barang: "",
    nama_barang: "",
    harga: "",
    deskripsi: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nama_barang, harga, deskripsi } = this.state;
    const { PostAPI } = this.props;

    const data = {
      id : new Date().getTime(),
      nama_barang : nama_barang,
      harga : harga,
      deskripsi : deskripsi,
      gambar : ''
    }

    PostAPI(data);
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <div className="container">
        <div className="form-wrapper mt-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Nama Barang"
                className="outline-none"
                autoComplete="off"
                id="nama_barang"
                name="nama_barang"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="text"
                placeholder="Harga"
                autoComplete="off"
                id="harga"
                name="harga"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Deskripsi Barang"
                style={{ height: "100px" }}
                id="deskripsi"
                name="deskripsi"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="py-1 px-4"
              onClick={(e) => handleSubmit(e)}
            >
              Kirim
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Loading : state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  PostAPI : (data) => dispatch(PostDataToAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TambahBarang);
