import React from 'react'
import './campus.css' 
import gallery_2  from  '../../assets/gallery-2.png'   
import gallery_3  from  '../../assets/gallery-3.png'   
import gallery_4  from  '../../assets/gallery-4.png'   
import white_arrrow  from  '../../assets/dark-arrow.png'   


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
    </div>
  )
}

export default Campus