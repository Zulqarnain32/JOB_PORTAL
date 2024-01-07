import React from 'react'
import { GiHomeGarage } from "react-icons/gi";

const Banner = () => {
  return (
    <>
    <div className="banner-container">
        <div className="layer">
        <h1> How Job Portal Works</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit vitae <br /> alias aliquid pariatur. Quae cumque consequuntur, optio perspiciatis deleniti <br />    voluptatem inventore?</p>
           <span>Open Roles  -- </span>
           <span>Internship program --  </span>
           <span>Our values --</span>
           <span>Meet our leadership --  </span>
        </div>
    </div>
    <div className="work-cation">
      <h1 className="blue w-title"><GiHomeGarage className='w-icon'/>
 Workcation</h1>
      <p className='ceo-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at molestiae? Doloremque possimus eius praesentium, expedita porro facere dolorem fugiat laudantium omnis eum voluptatem quisquam eveniet molestias illum obcaecati nulla alias natus sit libero!</p>
      <img src="/assets/ceo.jpg" className='ceo-img'/>
      <p className='ceo-name'>Zulqarnain Chohan - <span className='light'>CEO of Workcation</span></p>
    </div>
    </>
  )
}

export default Banner
