import React, {Component} from 'react';
import { getDataFromAPI } from './../../../config/redux/actions/';
import { Container, Card, Button } from 'react-bootstrap';
import Img1 from './../../../assets/img/1.jpg'

class Dashboard extends Component{

    state = {
        data : [],
        isUpdate : false,
    }

    componentDidMount(){
        getDataFromAPI().then(response => {
            this.setState({
                data : response.data
            })
        })
    }

    render(){

        const { data } = this.state;

        return(
            <div className="mb-5">
                <Container>
                    <div className="mt-4">
                        <h1>Daftar Produk</h1>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            data.map(brg => {
                                return(
                                    <Card style={{ width: '18rem' }} key={brg.id_barang} className="me-2 mt-2">
                                        <Card.Img variant="top" src={Img1} />
                                        <Card.Body>
                                            <Card.Title>{brg.nama_barang}</Card.Title>
                                            <Card.Text style={{
                                                color : "red",
                                                fontSize : '1.5em'
                                            }}>Rp. {brg.harga}</Card.Text>
                                            <Card.Text>{brg.deskripsi}</Card.Text>
                                            <div>    
                                                <Button variant="primary">Add To Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default Dashboard;