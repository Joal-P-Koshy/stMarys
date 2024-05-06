import React from 'react'
import './History.css'
import { useCollapse } from 'react-collapsed'
import oldchurch from '../../assets/oldchurch.jpg'


function History() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            <section id="history">

                <div className="">
                    <h5>History</h5>
                </div>

                <div className="crh-txt">

                    <div className="crh-img">
                        <img src={oldchurch} alt="old church" className='old-crh' />
                    </div>


                    <p className='crh-para'><span className='me-5'></span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus nam voluptates similique aut obcaecati soluta expedita. Laudantium inventore nihil, laborum eveniet nesciunt veniam dignissimos iusto natus, ullam facilis tenetur ipsam debitis sint tempora reprehenderit hic obcaecati qui necessitatibus? Cupiditate placeat consequuntur debitis nesciunt autem porro voluptates ad dolores culpa inventore? Beatae est deleniti blanditiis perspiciatis porro ipsum assumenda cumque dicta vitae nisi nihil iste nulla, sapiente odio officia dolorum excepturi pariatur cupiditate similique possimus. Quaerat fugit maxime facere aliquam placeat alias dolore, accusamus porro quis cumque corporis vitae, modi velit quisquam aliquid dicta beatae fuga incidunt atque blanditiis pariatur!
                        <br />

                        {
                            isExpanded ? '' : (
                                <button className='expand' {...getToggleProps()}>read more...</button>
                            )
                        }

                        <section {...getCollapseProps()}>
                            <span className='me-5'></span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste atque, quaerat sunt inventore consequatur magni incidunt veritatis ut reprehenderit, perspiciatis distinctio sed, quibusdam maiores tempore delectus deserunt. Animi perspiciatis, veritatis modi beatae dolores doloremque. Voluptas ullam consequatur ducimus qui aliquam repellat dolore excepturi magnam exercitationem alias doloribus a temporibus cum totam tenetur quasi facere praesentium est non, iste, beatae minima eos nihil. Ea cum tempore veniam amet laboriosam recusandae consectetur natus obcaecati, dicta, nihil modi, tenetur exercitationem? Iure laborum ipsum nemo veniam eveniet, quos porro quis nisi? Impedit, temporibus unde commodi dicta, quisquam quis molestiae, sit hic inventore magni dolorum pariatur officia eligendi quae fuga? Eligendi iste, et odit vel eos voluptas tempore laudantium est obcaecati porro. Consequuntur voluptatem eos ipsam cum! Ab expedita eligendi soluta natus sint mollitia sapiente rerum numquam cum tenetur libero rem magni laboriosam exercitationem quidem explicabo quaerat minima, nobis id corrupti. Nostrum dicta qui nemo repellat adipisci. Voluptatem alias amet voluptatibus dolores blanditiis magni distinctio consequuntur veniam velit nostrum officia quasi sed cupiditate, porro, et repellendus cumque sint odit illum nisi corrupti impedit? Magnam eum voluptas ratione molestiae vitae esse unde, harum nemo. Ad, corrupti, similique iure provident quo excepturi sapiente distinctio inventore libero impedit quas, quis quod pariatur error qui magnam dolor totam ipsa. In, totam saepe. Ex mollitia id placeat quibusdam nam? Cupiditate architecto, blanditiis expedita, dicta quasi repellendus officia officiis voluptatum deleniti, eos accusamus natus iure illum consequuntur nam id? Molestias animi cupiditate autem facilis facere sequi impedit deserunt illum velit, dolor quia laborum quos nesciunt possimus voluptatum, minima inventore aut provident rem consequuntur. Itaque sed delectus fuga eius, exercitationem tenetur, alias commodi amet molestiae quidem debitis asperiores ipsam error illum omnis ipsa eligendi atque aspernatur obcaecati? Perferendis minus laudantium dolor cupiditate molestiae explicabo velit vero laboriosam rem aliquid. Laborum, facilis.
                        </section>

                        {
                            !isExpanded ? '' : (
                                <button className='expand' {...getToggleProps()}>read less</button>
                            )
                        }
                    </p>

                </div>
            </section>

            <hr />
        </>
    )
}

export default History