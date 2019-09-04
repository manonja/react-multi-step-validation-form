import React, { Component } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
export class Success extends Component {

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
        <div className='page-detail'>
          <p className="alignleft user">User Details</p>
          <p className="aligncenter privacy">Privacy</p>
          <h3 className="alignright done">Done</h3>
        </div>
          <p className='react-icon'> <FaRegThumbsUp/> </p>
          <h3 className='success-msg'>Please verifiy your email address, you should have received a message from us already! </h3>
        </div>
      </div>
   
    )
  }
}


export default Success
