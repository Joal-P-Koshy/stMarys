import React from 'react'
import './Footer.css'
import mcclogo from '../assets/mcclogo.png'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <>
            <hr className='footer-line' />
            <section id="footer">
                <div className="mcclogo-address">
                    <div className="mcclogo">
                        <img src={mcclogo}
                            width={"40px"}
                            height={"40px"}
                            alt="LOgo"
                            className='me-3' />
                        <p className='mt-2'>St. Mary's Malankara Catholic Church Chettukuzhy</p>
                    </div>
                    <div className="address">

                    </div>
                </div>

                <div className="map">
                    <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503173.9849932058!2d76.40104814681888!3d9.84644013913281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07aa10ba91be23%3A0x3730ee10277d55e5!2sSt.%20Mary&#39;s%20Syriac%20Malankara%20Syriac%20Catholic%20Church%2C%20Chettikuzhy!5e0!3m2!1sen!2sin!4v1714990426114!5m2!1sen!2sin"
                            width="300"
                            height="150"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className='rounded border border-secondary'>
                        </iframe>
                    </div>
                </div>

                <div className="pages">
                    <h6>Pages</h6>
                    <span className="pages-link">
                        <Link to='/' style={{ textDecoration: "none", color: "#352f36" }}>Home</Link>
                        <Link to='/mcym' style={{ textDecoration: "none", color: "#352f36" }}>MCYM</Link>
                        <Link to='/mccl' style={{ textDecoration: "none", color: "#352f36" }}>MCCL</Link>
                        <Link to='/gallery' style={{ textDecoration: "none", color: "#352f36" }}>Gallery</Link>
                    </span>

                </div>

                <div className="guides">
                    <h6>Guides</h6>
                    <span className="guides-link">
                        <Link to='https://react.dev/' target='_blank' style={{ textDecoration: "none", color: "#352f36" }}>React</Link>
                        <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: "none", color: "#352f36" }}>React Bootstrap</Link>
                        <Link to='https://getbootstrap.com/' target='_blank' style={{ textDecoration: "none", color: "#352f36" }}>Bootstrap</Link>
                    </span>

                </div>

                <hr className='above-copy'/>

                <div className="copyrights">
                    <p className=''>Copyright &copy; 2024 St. Mary's Malankara Catholic Church Chettukuzhy. Built with React by Joal P Koshy</p>
                </div>
            </section>
        </>
    )
}

export default Footer