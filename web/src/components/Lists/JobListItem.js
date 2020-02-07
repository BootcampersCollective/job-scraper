import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { JobIndexHeader } from '../Lists'

const JobListItem = ({ job }) => (
  <ListGroup.Item as='li'>
    <JobIndexHeader {...job} />
  </ListGroup.Item>
)

export default JobListItem
