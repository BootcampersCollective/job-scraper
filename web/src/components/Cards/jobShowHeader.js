import React from 'react'
import  Card  from 'react-bootstrap/Card'

const JobCardHeader = ({ category, title, styling }) => (
  <Card body className={ styling }>
    { category }  >   { title }  
  </Card>
)

export default JobCardHeader