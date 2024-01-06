import React from 'react'
import './Education.css'
const Education = ({edu1,edu2,edu3,details1,details2,details3,image2}) => {
  return (
    <div className='Education1'>
    <div>
      <img src={image2} alt='Image' className='image-top2'/>
      </div>
    <div className='Education'>
      <h3>{edu1}</h3>
      <div>
        <p>{details1}</p>
      </div>
      <h3>{edu2}</h3>
      <div>
        <p>{details2}</p>
      </div>
      <h3>{edu3}</h3>
      <div>
        <p>{details3}</p>
      </div>   
    </div>
    </div>
  )
}

export default Education
