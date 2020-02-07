import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { JobShowHeader, JobShowCarousel, JobShowSummary } from '../components/Cards'
import { JobInfo } from '../constants'

function RoleShow () {
  const { label, title, data, style, imgArr, experience } = JobInfo
  return (
    <Container>
      <Row>
        <Col>
          <JobShowHeader category={label.category} role={label.role} styling={style.header} exp={experience} />
          <JobShowCarousel images={imgArr} />
          <JobShowSummary title={title} data={data} styling={style.summary} />
        </Col>
      </Row>
    </Container>
  )
}
export default RoleShow
