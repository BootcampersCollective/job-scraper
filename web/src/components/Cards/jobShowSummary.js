import React from 'react'
import { Card, Button, ListGroup }  from 'react-bootstrap'

const Entries = (source)=> {
return source.map(entry=><ListGroup.Item>{entry}</ListGroup.Item>)
}

const JobShowSummary = ({ styling, title, data }) => (
  <Card body className={ styling }>
      <Card.Title>{title}</Card.Title>
      <ListGroup>
      {Entries(data.topSkills)}
      <br/>
      {Entries(data.prefSkills)}
      </ListGroup>
  </Card>
)
export default JobShowSummary