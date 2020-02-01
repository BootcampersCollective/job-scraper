import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {JobShowHeader as Header, JobShowCarousel as JobGraphics, JobShowSummary as Summary } from '../components/Cards'
import {JobInfo} from '../constants'

function RoleShow(){
    console.log('role show rendered')
    const {label, title, data, style, imgArr, experience} = JobInfo
    return(
    <Container>
        <Row>
            <Col>
                <Header category={label.category} role={label.role} styling={style.header} exp={experience}/>
                <JobGraphics images={imgArr}/>
                <Summary title={title} data={data} styling={style.summary}/>
            </Col>
        </Row>
    </Container>
    )
}
export default RoleShow;