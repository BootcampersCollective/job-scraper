import React from 'react'
import  Card  from 'react-bootstrap/Card'

const JobCardHeader = ({ category, role, styling, exp,}) => (
  <Card body className={ styling }>
    { category }  >   { role }  > { exp  || "Experience"}
  </Card>
)

export default JobCardHeader