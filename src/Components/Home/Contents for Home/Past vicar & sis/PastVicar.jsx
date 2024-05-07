import React from 'react'
import './PastVicar.css'
import { useCollapse } from 'react-collapsed'
import sampleimg from '../../../assets/user1.jpg'

function PastVicar() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    return (
        <>
            <section id="past-vicar">
                <div className="heading">
                    <h5 className="">Past Vicar</h5>
                </div>
                <div className="dtls-wrap mb-3">
                    <div className="fr-dtls">
                        <div className="num">#</div>
                        <div className="fr-img">Image</div>
                        <div className="fr-name">Name</div>
                        <div className="fr-year">Year</div>
                    </div>

                    <div className="fr-dtls">
                        <div className="num">1</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. Mathew Varickaplamoottil</div>
                        <div className="fr-year">1963 - 1966</div>
                    </div>

                    <div className="fr-dtls">
                        <div className="num">2</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. John Chundevalel</div>
                        <div className="fr-year">1966 - 1969</div>
                    </div>
                </div>

                {
                    isExpanded ? '' : (
                        <button className='expand' {...getToggleProps()}>View more...</button>
                    )
                }
                <div className="dtls-wrap mb-3" {...getCollapseProps()}>

                    <div className="fr-dtls">
                        <div className="num">3</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. Thomas Charivupurayidam</div>
                        <div className="fr-year">1969 - 1972</div>
                    </div>

                    <div className="fr-dtls">
                        <div className="num">4</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. George Pathiparambil</div>
                        <div className="fr-year">1969 - 1972</div>
                    </div>

                    <div className="fr-dtls">
                        <div className="num">5</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. John Irumeda</div>
                        <div className="fr-year">1972 - 1975</div>
                    </div>

                    <div className="fr-dtls">
                        <div className="num">6</div>
                        <div className="fr-img">
                            <img src={sampleimg} alt="Vicar img" className='vic-img' />
                        </div>
                        <div className="fr-name">Fr. Joseph Vadakekara</div>
                        <div className="fr-year">1975 - 1976</div>
                    </div>
                </div>
                {
                    !isExpanded ? '' : (
                        <button className='expand' {...getToggleProps()}>View less</button>
                    )
                }
            </section>
        </>
    )
}

export default PastVicar