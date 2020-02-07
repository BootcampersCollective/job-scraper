import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { JobIndexInfo } from '../constants'
import { JobIndexIterator } from '../components'

function RoleShow () {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={8}>
          <h3>Current Job Summaries</h3>
          <JobIndexIterator data={JobIndexInfo} />
        </Col>
      </Row>
    </Container>
  )
}
export default RoleShow
