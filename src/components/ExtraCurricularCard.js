import React from 'react';
import "../App.css";
import { Col } from 'react-bootstrap';
import { Row } from 'reactstrap';
function ExtraCurricularCard (props) {
    return (
        <Row className='justify-content-md-center' style={{margin:20}}>
            <Col md='auto' lg='8'>
                <img src={props.image} alt={props.title} className='ECimg'/>
                    <div   style={{float:'right'}}>
                        <h1 >{props.org}</h1>
                        <h2>{props.position}</h2>


                        <ul>
                            <br/>
                            {props.bullets.map((bullet) =>{
                                return(
                                    <li>{bullet}<br/></li>

                                );
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>

    );
}


export default ExtraCurricularCard;