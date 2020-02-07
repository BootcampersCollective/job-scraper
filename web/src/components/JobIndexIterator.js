import React from 'react'
import { JobListItem } from '../components/Lists'
import { ListGroup } from 'react-bootstrap'

function JobIndexIterator ({ data }) {
  const jobs = data.map((item, idx) => <JobListItem key={idx} job={item} />)
  return (<ListGroup as='ul'>{jobs}</ListGroup>)
}

export default JobIndexIterator
