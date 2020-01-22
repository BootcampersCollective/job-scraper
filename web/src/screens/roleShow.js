import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {jobShowHeader as Header, jobShowCarousel as JobGraphics, jobShowSummary as Summary } from '../components/Cards'
import {JobInfo} from '../constants'

function RoleShow(){
    const {label, title, data, style, imgArr} = JobInfo
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