import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Img1 from "./../../../assets/img/1.jpg";

const CardComponent = ({id_barang, nama_barang, harga, deskripsi}) => {
  return (
    <Card style={{ width: "18rem" }} key={id_barang} className="me-2 mt-2">
      <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Title>{nama_barang}</Card.Title>
        <Card.Text
          style={{
            color: "red",
            fontSize: "1.5em",
          }}
        >
          Rp. {harga}
        </Card.Text>
        <Card.Text>{deskripsi}</Card.Text>
        <div>
          <Button variant="dark">Ubah Barang</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
