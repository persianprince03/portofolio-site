import React from 'react';
import "../App.css";

function ExtraCurricularCard (props) {
    return (
        <div className='contentCard'>
            <div>
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
                </div>
            </div>

    );
}


export default ExtraCurricularCard;