import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import church from '../assets/church.jpg'
import church2 from '../assets/church2.jpg'
import church3 from '../assets/church3.jpg'

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
                    <div className="head-1">
                        <h4 className="">Introduction</h4>
                    </div>
                    <div className="para-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus sapiente
                        nam voluptas nisi hic corrupti. Libero necessitatibus, distinctio voluptate,
                        molestiae beatae magnam excepturi veritatis temporibus tempora tenetur accusantium labore
                        reiciendis sunt possimus soluta officiis voluptatem nobis optio delectus inventore maiores
                        assumenda sit commodi amet! Enim repellat officia accusamus molestiae? Odio a molestiae ipsam
                        dolorum sapiente ullam fuga nesciunt, eaque consequuntur velit? Officia enim quaerat nostrum deleniti?
                        Esse saepe assumenda minus omnis enim qui nemo consequatur eveniet animi laboriosam! Dolorem rem voluptatibus
                        dignissimos tenetur assumenda sint sit ratione magni praesentium non earum, optio ullam dolor voluptates, fugiat exercitationem? Possimus, unde.
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home