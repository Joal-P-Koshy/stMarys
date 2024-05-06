import React from 'react'
import './Mccl.css'
import Carousel from 'react-bootstrap/Carousel';
import mccl1 from '../assets/mccl1.jpg'
import mccl2 from '../assets/mccl2.jpg'
import mccl3 from '../assets/mccl3.jpg'
import mccl4 from '../assets/mccl4.jpg'

function Mccl() {
  return (
    <section id="mccl">

      <div className="heading mb-4 mt-3">
        <h4 className="text-center">Malankara Catholic Childrens Leauge</h4>
      </div>

      <div className="mccl-img-quotes">
        <Carousel fade className="mccl-imgs ">
          <Carousel.Item interval={3000}>
            <img src={mccl1} alt="mccl image" className='crsl-img' />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={mccl2} alt="mccl image" className='crsl-img' />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={mccl4} alt="mccl image" className='crsl-img' />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={mccl3} alt="mccl image" className='crsl-img' />
          </Carousel.Item>
        </Carousel>

        <p className="quote-3">
          “Jesus said, ‘Let the little children come to me,
          and do not hinder them, for the kingdom of
          heaven belongs to such as these.’ ”
          <br />
          (Matthew 19:14)
        </p>
      </div>
    </section>
  )
}

export default Mccl