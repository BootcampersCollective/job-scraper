import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {jobShowHeader as Header, jobShowCarousel as JobGraphics, jobShowSummary as Summary } from '../components/Cards'

const JobInfo = {
    title: "Junior React Developer",
    data: ["Job Target: 1", "Job Target: 2", "Job Target: 3","Job Target: 4"],
    label: { 
            category: 'Front End', 
            role: "Engineer"
        },
    imgArr : [
        {   
            alt: "Slide 1",
            src: "https://www.iconsdb.com/icons/preview/white/pie-chart-xxl.png",
            term: "Last Year"
        },
        {   alt: "Slide 2",
            src: "https://www.iconsdb.com/icons/preview/white/pie-chart-xxl.png",
            term: "Last Quarter"
        },
        {   
            alt: "Slide 3",
            src: "https://www.iconsdb.com/icons/preview/white/pie-chart-xxl.png",
            term: "Last Month"
        }
    ],
    style : {
        header : "card-subtitle center my-2 md-6",
        graphics: "",
        summary: "card-title center md-6 my-3"
    }
}

function RoleShow(){
    const {label, title, data, style,imgArr} = JobInfo
    return(
    <Container>
        <Row>
            <Col>
                <Header category={label.category} role={label.role} styling={style.header}/>
                <JobGraphics images={imgArr}/>
                <Summary title={title} data={data} styling={style.summary}/>
            </Col>
        </Row>
       
    </Container>
    )
}
export default RoleShow;