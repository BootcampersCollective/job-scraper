import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const JobIndexHeader = ({ category, title, styling, experience, alt, logo, meta }) => (
  <Card body className={styling}>
    <Row className='justify-content-md-center'>
      <Col xs={1}>
        <img src={logo} alt={alt} height={64} width='auto' />
      </Col>
      <Col xs={{ span: 8, offset: 2 }}>
        <Row className='justify-content-center'>
          <h5>{category}  >   {title}  > {experience || 'Experience'} </h5>
        </Row>
        <Row className='justify-content-center'><em>{meta}</em></Row>
      </Col>
    </Row>
  </Card>
)

export default JobIndexHeader
