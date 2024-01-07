import React from 'react'

const Companies = () => {
  return (
    <>
      <div className="company-container">
         <h1>Trusted by World Most Inovative Teams</h1>
         <div className="teams">
          <div>
          <img src="/assets/google-logo.png" alt="" />
           <span className='google'>Google</span> 
          </div>
           <div>
           <img src="/assets/paypal-logo.png" alt="" /> 
           <span className='paypal'>Paypal</span>
            </div> 
          <div>
          <img src="/assets/twitter.png" alt="" />  
           <span className='twitter'>Twitter</span> 
          </div>
           <div>
           <img src="/assets/apple.png" alt="" />  
           <span className='apple'>Apple</span> 
           </div>
          <div>
          <img src="/assets/facebook.png" alt="" />  
           <span className='facebook'>Facebook</span></div> 
         </div>  
      </div> 
    </>
  )
}

export default Companies
