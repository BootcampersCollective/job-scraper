import React from 'react'
import { Card, Button, ListGroup }  from 'react-bootstrap'

const Entries = (source)=> {
return source.map(entry=><ListGroup.Item>{entry}</ListGroup.Item>)
}

const JobShowSummary = ({ styling, title, data }) => (
  <Card body className={ styling }>
      <Card.Subtitle>{title}</Card.Subtitle>
      <ListGroup>
      {Entries(data)}
      </ListGroup>
  </Card>
)
export default JobShowSummary