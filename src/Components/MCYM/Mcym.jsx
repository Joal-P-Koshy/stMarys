import React from 'react'
import './Mcym.css'
import Carousel from 'react-bootstrap/Carousel';
import { useCollapse } from 'react-collapsed'
import mcym1 from '../assets/mcym1.jpg'
import user1 from '../assets/user1.jpg'
import albinshiju from '../assets/albinshiju.jpg'
import danidibu from '../assets/danidibu.png'
import jijomangatteth from '../assets/jijomangatteth.jpg'
import angel from '../assets/angel.jpg'
import alishajoseph from '../assets/alishajoseph.jpg'
import nibinjose from '../assets/nibinjose.jpg'
import bijinabiju from '../assets/bijinabiju.jpg'


function Mcym() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

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


      <div className="contents">
        <div className="">
          <h5 className="">About</h5>

          <p className='about-mcym'><span className='me-5'></span>Malankara Catholic Youth Movement is an association of youngsters of the globally spread Syro Malankara Catholic Church, which focuses on the development of the Youths, Church and the society. MCYM is working at the Unit, Regional and Diocesan level & Church level.
            The Catholic Youth Movement of Kerala dates back to the second half of the 1960s. Although there were some youth organisations in the parish level at different parts of Kerala, the spread of the organization of the youth movements in the diocesan took place rather late.
            <br />


            {
              isExpanded ? '' : (
                <button className='expand' {...getToggleProps()}>read more...</button>
              )
            }

            <section {...getCollapseProps()}>
              <span className='me-5'></span>The Catholic Youth Movement of Kerala dates back to the second half of the 1960s. Although there were some youth organisations in the parish level at different parts of Kerala, the spread of the organisation of the youth movements in the diocesan took place rather late. Two reasons seem to be of prime importance for the foundation of the youth organisations in the late 1960s.
              First of all, in the church there was a great enthusiasm both in the Kerala region and National level discussions and study programs of the Second Vatican Council. From different topics the role of laity in the life of Church has become one of the important points that attracted the laity all over India. Secondly,
              in Kerala the Christian communities along with other social and religious organisations started fighting against the second communist regime in 1967. In particular the fight was against the educational policy of the Government. The former has already given the ideological basis for the organisation of the laity at various
              levels and the latter has given an immediate reason to join with the Church in its for justice.The visionary desire of Zacharias Mar Athanasios, the first organised youth organisation in the Kerala Catholic Church was formed. It is in this background that the youth gathering at Vennikulam, on 17 November 1967 under Presidency of Msgr Mathew Nedungad the then Vicar General of Thiruvalla Diocese decided to start a youth organisation. Under the able leadership of Mr Varghese Karippayil an adhoc committee was formed and later on 28 February 1968 it was formally launched. Fr Chacko Elavumparampil was appointed as its first director. .To the great enthusiasm of the youth, the dean of the oriental congregation Cardinal Feuston Berg inaugurated the youth organization in which Zacharias Mar Athanasios presided .It was inaugurated at St.John’s Cathedral,
              Thiruvalla on 28th February 1968. In the beginning the organisation was known as Kerala Katholikka Yuvajana Sanghadana or Kerala Catholic Youth Organisation(KCYO).

            </section>

            {
              !isExpanded ? '' : (
                <button className='expand' {...getToggleProps()}>read less</button>
              )
            }
          </p>

        </div>

        <hr />

        <div className="exe-mem">
          <h5 className="mt-3">Executive Members</h5>

          <div className="mem-img-wrap">
            <div className="mem-img">
              <img src={albinshiju} alt="mcym img" className='mt-3' />
              <p className="mt-3">Albin Shiju</p>
              <p className="">President</p>
            </div>
            <div className="mem-img">
              <img src={alishajoseph} alt="mcym img" className='mt-3' />
              <p className="mt-3">Alisha Joseph</p>
              <p className="">Secretary</p>
            </div>
            <div className="mem-img">
              <img src={user1} alt="mcym img" className='mt-3' />
              <p className="mt-3">Alan Saiju</p>
              <p className="">Vice-President</p>
            </div>
            <div className="mem-img">
              <img src={angel} alt="mcym img" className='mt-3' />
              <p className="mt-3">Angel Elsa Varghese</p>
              <p className="">Join-Secretary</p>
            </div>
            <div className="mem-img">
              <img src={danidibu} alt="mcym img" className='mt-3' />
              <p className="mt-3">Dani Dibu</p>
              <p className="">Treasurer </p>
            </div>
            <div className="mem-img">
              <img src={jijomangatteth} alt="mcym img" className='mt-3' />
              <p className="mt-3">Jijo mangattethu</p>
              <p className="">Animator</p>
            </div>
            <div className="mem-img">
              <img src={nibinjose} alt="mcym img" className='mt-3' />
              <p className="mt-3">Nibin Jose</p>
              <p className="">Syndicate member</p>
            </div>
            <div className="mem-img">
              <img src={bijinabiju} alt="mcym img" className='mt-3' />
              <p className="mt-3">Bijina biju</p>
              <p className="">Syndicate member</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Mcym