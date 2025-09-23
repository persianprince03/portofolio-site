import machq from '../media/machq.png';
import mst from '../media/MissouriS&T_Horizontal_Miner_RGB.png';
import hunter from '../media/hunter-logo-white-red.png'
import intelag from '../media/intelag.png'
export const WorkExperienceData = [
        {
        company: "Intelag",
        title: "Full Stack Developer",
        image:intelag,
        timeFrame:'January 2025 - Current',
        bullets: [
            "Architected the company’s AWS cloud foundation in its first week, accelerating infrastructure readiness by 50% compared to on-premise setup.",
            "Created python solutions to interact with AWS services by ingesting JSON files, resulting in 60% faster deployment of resources.",
            "Established company’s website using Webflow.",
            "Developed multiplatform user interfaces using Flutter."
        ]
    },
    {
        company: "Hunter Engineering Company",
        title: "Data Science Co-op",
        image:hunter,
        timeFrame:'June 2024 - December 2024',
        bullets: [
            "Developed UI/UX using ReactJS and implemented scalable back-end solutions in Python, reducing data annotation time to 8 seconds per image.",
            "Optimized data retrieval tools by utilizing complex SQL queries with Python and FastAPI scripts, reducing data upload time from 2 days to 7 hours.",
            "Executed data annotation for machine learning, aiding in precise model training and deployment.",
            "Enhanced model training performance through rigorous debugging, code optimization, and foundational understanding of PyTorch Distributed Data Parallel, reducing training time to 1 hour instead of 4 hours."

         
        ]
    },
    {
        company: "Missouri University of Science and Technology",
        title: "Student IT Assistant",
        image:mst,
        timeFrame:'April 2023 - Current',
        bullets: [
            'Enhanced, delivered, and packaged applications to campus machines using AppsAnywhere','Developed Automation Scripts using AutoIt PowerShell and Visual Basic to activate the license for applications'
            ,'Operated Virtual Machines using Microsoft System Center Virtual Machine Manager for development and testing environment '
        ]
    }
]