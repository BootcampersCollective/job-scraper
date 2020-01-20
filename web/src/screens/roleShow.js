import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {jobShowHeader as Header, jobShowCarousel as JobGraphics, jobShowSummary as Summary } from '../components/Cards'

const style = {
    header : "card-subtitle center my-2 md-6",
    graphics: "",
    summary: "card-title center md-6 my-3"
}
const imgArr = [
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
]
function RoleShow(){
    return(
    <Container>
        <Row>
            <Col>
                <Header category={'Front End'} title={'Engineer'} styling={style.header}/>
                <JobGraphics images={imgArr}/>
                <Summary title={"Junior React Developer"} data={["Job Target: 1", "Job Target: 2", "Job Target: 3","Job Target: 4"]} styling={style.summary}/>
            </Col>
        </Row>
       
    </Container>
    )
}
export default RoleShow;