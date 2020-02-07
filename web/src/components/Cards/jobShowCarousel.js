import React from 'react'
import { Carousel, Card } from 'react-bootstrap'

const items = (imgArr) => {
  return imgArr.map((image, idx) => (
    <Carousel.Item key={idx} className='my-3'>
      <img
        className='row p-4 w-50 h-50 mx-auto bg-dark rounded'
        src={image.src}
        alt={image.alt}
      />
      <Card.Title as='p' className='my-1 text-info'>
        <code>{image.term}</code><br /><code>{image.alt}</code>
      </Card.Title>
    </Carousel.Item>
  ))
}

const JobCardCarousel = ({ images }) => (
  <Card>
    <Carousel
      controls={false}
      fade
      interval={2000}
      indicators={false}
      pauseOnHover
    >

      {items(images)}

    </Carousel>
  </Card>

)

export default JobCardCarousel
