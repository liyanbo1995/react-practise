import React from "react";
import img1 from '../assets/bg-3.png';
import {Button} from 'react-bootstrap';
import {Card} from "react-bootstrap";


const Carddesign = (props) => {
  return(
    <div>
        <p>Editor's Picks</p>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Gifts for Him</Card.Title>
                    <Card.Text>
                       For Valentine's Day
                    </Card.Text>
                </Card.Body>
        </Card>
    </div>
    
  ) 
}
export default Carddesign;
