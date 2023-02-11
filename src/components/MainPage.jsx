import React from 'react'
import './MainPage.css'

function MainPage() {
  return (
    <div className="App">
      <center><h1 className='Title'>Fitness Club Registration</h1></center>
      
      <div className="Center_main">
        <div className='InnerDiv'>
          <center>
          <input className='inputmargintop'  type='text' placeholder='NAME'></input>
          <input type='Email' placeholder='Email' ></input>
          <input type='phonenumber' placeholder='PhoneNumber'></input>
          <input className="inputmarginbottom" type='text' placeholder='Address'></input>
          <br/>
          <button >Add Member</button>
          </center>
        </div>
        
      
             </div>
             <center>
         <button>View List Member</button>
       </center>

    </div>
  )
}

export default MainPage