import React from 'react'
import { JobListItem } from '../components/Lists'
import { ListGroup } from 'react-bootstrap'


function JobIndexIterator({data}) {
    const jobs = data.map((item)=><JobListItem job={ item } />)
    return (<ListGroup as="ul">{ jobs }</ListGroup>)
}

export default JobIndexIterator