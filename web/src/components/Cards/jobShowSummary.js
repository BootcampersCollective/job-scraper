import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Entries = (source) => (source.map((entry, idx) => <ListGroup.Item key={idx}>{entry}</ListGroup.Item>))

const JobShowSummary = ({ styling, title, data }) => (
  <Card body className={styling}>
    <Card.Title>{title}</Card.Title>
    <ListGroup>
      {Entries(data.topSkills)}
      <div />
      {Entries(data.prefSkills)}
    </ListGroup>
  </Card>
)
export default JobShowSummary
