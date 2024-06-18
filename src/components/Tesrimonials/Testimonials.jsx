import React, { useRef } from 'react'
import './Testimonials.css'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io";


function Testimonials() {

    const slider = useRef()
    let tx = 0


    const slideForward = () => {
        if (tx > -50) {
            tx += -25
        }
        slider.current.style.transform = `translateX(${tx}%) `
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%) `
    }

    return (
        <>
            <div className="testimonials">
                <IoIosArrowBack className='back-btn' onClick={slideBackward} />
                <IoIosArrowForward className='next-btn' onClick={slideForward} />

                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user1} alt="" />
                                    <div>
                                        <h3>MARIA</h3>
                                        <span>Eduol, USA</span>
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint doloremque! Neque praesentium illo aliquam consectetur nulla. Reiciendis modi, quos, ducimus magnam consequatur commodi aspernatur ad fugiat aliquam illum velit!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user2} alt="" />
                                    <div>
                                        <h3>William</h3>
                                        <span>Eduol, USA</span>
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint doloremque! Neque praesentium illo aliquam consectetur nulla. Reiciendis modi, quos, ducimus magnam consequatur commodi aspernatur ad fugiat aliquam illum velit!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user3} alt="" />
                                    <div>
                                        <h3>SARAH</h3>
                                        <span>Eduol, USA</span>
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint doloremque! Neque praesentium illo aliquam consectetur nulla. Reiciendis modi, quos, ducimus magnam consequatur commodi aspernatur ad fugiat aliquam illum velit!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user4} alt="" />
                                    <div>
                                        <h3>Lucas</h3>
                                        <span>Eduol, USA</span>
                                    </div>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint doloremque! Neque praesentium illo aliquam consectetur nulla. Reiciendis modi, quos, ducimus magnam consequatur commodi aspernatur ad fugiat aliquam illum velit!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Testimonials
