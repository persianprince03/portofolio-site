import Typewriter from 'typewriter-effect';
import './Skills.css'
function Skills(){

    return(
        <div id="Skills" className='skills' >

                <h2>Programming Skills</h2>
                <Typewriter
                    options={{
                        strings:[
                            "Python",
                            "C++",
                            "JavaScript",
                            "SQL",
                            "ReactJS",
                            "Bash",
                            "Flutter",
                            "PyTorch",
                            "FastAPI",
                            "AWS",
                            "Docker",
                            "Git",
                            "HTML/CSS",
                        ],
                       
                        autoStart: true,
                        loop: true,
                        size: 10,
                    }}/>
 <br/>
            <h2>IT Skills</h2>
            <Typewriter
                options={{
                    strings:[
                        "Microsoft Virtual Machine Management",
                        "AppsAnywhere Software Packaging",
                        "Microsoft business 365 Admin",
                        "Webflow",
                        ],
                    autoStart: true,
                    loop: true

                }}/>
          <br/>
            <h2>Personal Skills</h2>
            <Typewriter
                options={{
                    strings:[
                        "Leadership",
                        "Communication",
                        "Creativity",
                        "Bilingual: Farsi And English",
                        "Jira"
                       ],
                    autoStart: true,
                    loop: true
                }}/>



        </div>
    )
}

export default Skills;