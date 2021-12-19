import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import axios from "axios";
import {useState, useEffect} from 'react';

function SingleMovieFetch() {
    const {movid} = useParams();
    const [singledata, setSingleData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/movie/${movid}`);
            console.log(response);
            setSingleData([response.data]);
            console.log([response.data]);
          } catch (error) {
            console.error(error);
          }
    }, []);

    
    // console.log(movid);

    // const [data, setData] = useState([]);
    // useEffect(async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/movies');
    //         console.log(response);
    //         setData(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    // }, []);

    // let {movid} = useParams();
    // // console.log(movid);
    return (
        <div>
            <Container fluid style={{padding:"8%", backgroundColor:"pink"}}>
                <Row style={{textAlign: 'center',justifyContent:"center"}}>
                    {singledata.map((movee) => {
                        return (
                            <Col id={movee._id} key={movee._id} xs={6} md={4} lg={3} style={{marginTop:"2%"}}>
                                <Card>
                                    <Card.Img variant="top" src={movee.imageurl} />
                                    <Card.Body>
                                        <Card.Title>{movee.title}</Card.Title>
                                        <Card.Text>{movee.actor}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )    
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default SingleMovieFetch;