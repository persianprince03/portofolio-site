import React from 'react';
import "../App.css";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";
function FLProjectCard (props) {
    return (
        < Row className='justify-content-md-center'>
            <Col xs lg="5">
                <img src={props.image} alt={props.title} className='FLProjectCardImage' style={{margin:20}}/>
                </Col>

                <Col style={{float:"right"}}>
                <Row>
                    <h1 style={{fontSize:40}}>{props.client}</h1>
                    </Row>
                <Row>

                    <ul>
                        <br/>
                        {props.bullets.map((bullet) => {
                            return (
                                <li>{bullet}</li>
                            );
                        })}
                    </ul>
                    </Row>

                </Col>
                
        </Row>

    );
}


export default FLProjectCard;