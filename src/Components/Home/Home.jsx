import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import church from '../assets/church.jpg'
import church2 from '../assets/church2.jpg'
import church3 from '../assets/church3.jpg'
import Priest from './Contents for Home/Priest';
import History from './Contents for Home/History';
import PastVicar from './Contents for Home/Past vicar & sis/PastVicar';
import PastSister from './Contents for Home/Past vicar & sis/PastSister';

function Home() {
    return (
        <>
            <section id="home">
                <div className="imgs-quotes">
                    <Carousel fade className="church-imgs ">
                        <Carousel.Item interval={3000}>
                            <img src={church} alt="church image" className='crsl-img' />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src={church3} alt="church image" className='crsl-img' />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src={church2} alt="church image" className='crsl-img' />
                        </Carousel.Item>
                    </Carousel>

                    <p className="quote-1">
                        And I tell you, you are Peter, and on this rock I will build my church,
                        and the gates of hell shall not prevail against it. <br />
                        (Matthew 16:18)
                    </p>
                </div>

                <div className="contents">

                    <Priest />

                    <History />

                    <PastVicar />

                    <PastSister />

                </div>


            </section>
        </>
    )
}

export default Home