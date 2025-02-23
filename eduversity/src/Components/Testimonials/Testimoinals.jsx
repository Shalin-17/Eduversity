import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png';
import back_btn from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimoinals = () => {
     
        const slider = useRef();
        let  tx = 0;   

    const slideForward =()=> {
        if(tx > -50){
            tx -= 25;            
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =()=> {
        if(tx < 0){
            tx += 25;            
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }
  return (
    <div className='testimonials'>
       <img src={next_btn} alt="" className="next-btn" onClick={slideForward}/>
       <img src={back_btn} alt="" className="back-btn" onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Mary Barra</h3>
                            <span>B.E.CS, Eduvarsity</span>
                        </div>
                    </div>
                    <p>
                    Studying at this college has been a great experience with excellent faculty and practical courses. 
                    The supportive environment and modern facilities make learning enjoyable.
                    Plus, the extracurricular activities and career opportunities help in overall growth.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Mark Zuchkerberg</h3>
                            <span>B.E. Artificial Intelligence, Eduvarsity</span>
                        </div>
                    </div>
                    <p>
                    My experience at this college has been amazing, with knowledgeable faculty and practical learning.
                    The supportive atmosphere and modern facilities make studying enjoyable. 
                    Plus, the extracurricular activities and career opportunities add great value.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Lucy</h3>
                            <span>M.S. AIML, Eduvarsity</span>
                        </div>
                    </div>
                    <p>
                    Studying at this college has been a rewarding experience with insightful faculty and hands-on learning. 
                    The welcoming environment and modern facilities enhance the journey. 
                    Plus, the extracurricular activities and career opportunities make it even more fulfilling.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Glen Charles</h3>
                            <span>M.S. Banking Finance, Eduvarsity</span>
                        </div>
                    </div>
                    <p>
                    This college offers a fantastic learning experience with supportive faculty and practical courses. 
                    The friendly environment and modern facilities make studying enjoyable. 
                    Plus, the extracurricular activities and career opportunities enrich the journey.
                    </p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimoinals 
