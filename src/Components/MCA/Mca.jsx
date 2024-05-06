import React from 'react'
import './Mca.css'
import Carousel from 'react-bootstrap/Carousel';
import mca1 from '../assets/mca1.jpg'
import mca2 from '../assets/mca2.jpg'


function Mca() {
  return (
    <>
      <section id="mca">

        <div className="heading mb-4 mt-3">
          <h4 className="text-center">Malankara Catholic Childrens Leauge</h4>
        </div>

        <div className="mca-img-quotes">
          <Carousel fade className="mca-imgs ">
            <Carousel.Item interval={3000}>
              <img src={mca1} alt="mca image" className='crsl-img' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={mca2} alt="mca image" className='crsl-img' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={mca1} alt="mca image" className='crsl-img' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={
                mca2
              } alt="mca image" className='crsl-img' />
            </Carousel.Item>
          </Carousel>

          <p className="quote-4">
            “Jesus said, ‘Let the little children come to me,
            and do not hinder them, for the kingdom of
            heaven belongs to such as these.’ ”
            <br />
            (Matthew 19:14)
          </p>
        </div>
      </section>
    </>
  )
}

export default Mca