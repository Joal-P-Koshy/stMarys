import React from 'react'
import './Priest.css'
import frRony from '../../assets/fr-rony.jpg'

function Priest() {
    return (
        <>
            <section id="priest">

                <div className="mb-3">
                    <h5 className="">About current Vicar</h5>
                </div>

                <div className="photo-details">

                    <div className='pic'>
                        <img src={frRony} alt="fr rony"  className="fr-photo shadow" />
                    </div>

                    <div className="fr-details">
                        <div className="name d-flex">
                            <p className="w-50">Name : </p>
                            <p className="w-100">Fr Rony Scaria</p>
                        </div>
                        <div className="desig d-flex">
                            <p className="w-50">Designated Church : </p>
                            <p className="w-100">Chettukuzhy, Manthipara</p>
                        </div>
                        <div className="year d-flex">
                            <p className="w-50">Year of Serviece : </p>
                            <p className="w-100">2024 - Till now</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Priest