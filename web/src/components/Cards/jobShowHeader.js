import React from 'react'
import  Card  from 'react-bootstrap/Card'

const JobCardHeader = ({ category, role, styling }) => (
  <Card body className={ styling }>
    { category }  >   { role }  
  </Card>
)

export default JobCardHeader