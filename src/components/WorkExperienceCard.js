
function WorkExperienceCard (props){
    return (
        <div className={'WorkExperienceCard'}>
            <div className='WorkExperienceHeader'>
                <img src = {props.image} alt={props.title} className='WorkExperienceImage'/>
                <div className='WorkExprieneceHeaderText'>
                    <h1>{props.company}</h1>
                    <h2>{props.title}</h2>
                    <h3>{props.timeFrame}</h3>
                </div>
                <ul>
                    {props.bullets.map((bullet) =>{
                        return(
                            <li>{bullet}</li>
                        );
                    })}
                </ul>
            </div>
        </div>

    );

}

export default WorkExperienceCard;