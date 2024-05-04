import React from 'react'
import './Mcym.css'
import Carousel from 'react-bootstrap/Carousel';
import mcym1 from '../assets/mcym1.jpg'


function Mcym() {
  return (
    <section id="mcym">
      <div className="heading">
        <h4 className="text-center mt-5">Malankara Catholic Youth Movement</h4>
      </div>

      <div className="img-quote">
        <Carousel fade className="mcym-imgs ">
          <Carousel.Item interval={3000}>
            <img src={mcym1} alt="mcym image" className='crsl-mcym' />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={mcym1} alt="mcym image" className='crsl-mcym' />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={mcym1} alt="mcym image" className='crsl-mcym' />
          </Carousel.Item>
        </Carousel>

        <p className="quote-2">
          “Young people, enjoy your youth.
          Be happy while you are still young.
          Do what you want to do, and follow your heart's desire.
          But remember that God is going to judge you for whatever you do.
          Don't let anything worry you or cause you pain.
          You aren't going to be young very long.” <br />
          (Ecclesiastes 11:9-10)
        </p>
      </div>

    </section>
  )
}

export default Mcym