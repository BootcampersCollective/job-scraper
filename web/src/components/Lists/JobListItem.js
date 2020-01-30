import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { JobIndexHeader } from '../Lists'
function JobListItem ({job, styling}) {

    console.log(job)
    return <ListGroup.Item as="li">
            <JobIndexHeader {...job}/>
        </ListGroup.Item>
    }

export default JobListItem