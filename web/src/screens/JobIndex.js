import React from 'react'
import {Container, Col, Row,} from 'react-bootstrap'
// import {jobShowHeader as Header, jobShowCarousel as JobGraphics, jobShowSummary as Summary } from '../components/Cards'
import {JobIndexInfo} from '../constants' 
import {JobIndexIterator} from '../components'

function RoleShow(){
    // const {label, title, data, style, imgArr} = JobInfo
    return(
    <Container>
        <Row className = "justify-content-center">
            <Col xs={8}>
                <h3>Current Job Summaries</h3>
                <JobIndexIterator data = { JobIndexInfo }/>
            </Col>
        </Row>
    </Container>
    )
}
export default RoleShow;