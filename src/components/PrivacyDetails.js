import React, { Component } from 'react'
export class PrivacyDetails extends Component {
  // Go to the next page on submit
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  // Go back to the previous page 
  previous = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {handlePrivacy, comTrayProduct, comOtherProducts} = this.props

    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
        <div className='page-detail'>
          <p className="alignleft user">User Details</p>
          <h3 className="aligncenter privacy">Privacy</h3>
          <p className="alignright done">Done</p>
        </div>
        <div className='privacy-options'>
          <div>
            <input 
              type="checkbox" 
              value="comTrayProduct" 
              checked={comTrayProduct} 
              onChange={handlePrivacy('comTrayProduct')} 
            />
            <label 
              id='label-txt' 
              htmlFor="comTrayProduct">Receive updates about Tray.io product by email
            </label>
          </div>
          <br/>
          <div>
            <input 
              type="checkbox" 
              value="comOtherProducts" 
              checked={comOtherProducts} 
              onChange={handlePrivacy('comOtherProducts')}
            />            
            <label 
              id='label-txt' 
              htmlFor="comOtherProducts">Receive communication by email for other products created by the Tray.io team
            </label>
          </div> 
          <br/> 
        </div>
       
        <br/>
        <button id='btn-next' onClick={this.continue}>Next</button>
        <br/>
        <button id='btn-back' onClick={this.previous}>Back</button>
   
        </div>    
    </div>         
      
    )
  }
}



export default PrivacyDetails
