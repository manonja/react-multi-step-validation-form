import React, { Component } from 'react'
export class FormUserDetails extends Component {
   
  // Go to the next page on submit
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const {values, handleChange, nextStep } = this.props

    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <div className='page-detail'>
          <h3 className="alignleft">User Details</h3>
          <p className="aligncenter">Privacy</p>
          <p className="alignright">Done</p>
        </div>
          <form className="form">
            <div className="name">
              <input
                id="input-form-name"
                className={values.formErrors.name.length > 0 ? "error" : null}
                placeholder="Name *"
                type="text"
                name="name"
                noValidate
                onChange={handleChange}
              />
              {values.formErrors.name.length > 0 && (
                <span className="errorMessage">{values.formErrors.name}</span>
              )}
            </div>
            <div className="role">
              <input
                id="input-form-role"
                placeholder="Role"
                type="text"
                name="role"
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <input
                id="input-form-email"
                className={values.formErrors.email.length > 0 ? "error" : null}
                placeholder="Email *"
                type="email"
                name="email"
                onChange={handleChange}
              />
              {values.formErrors.email.length > 0 && (
                <span className="errorMessage">{values.formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <input
                id="input-form-password"
                className={values.formErrors.password.length > 0 ? "error" : null}
                placeholder="Password *"
                type="password"
                name="password"
                onChange={handleChange}
              />
              {values.formErrors.password.length > 0 && (
                <span className="errorMessage">{values.formErrors.password}</span>
              )}
            </div>
          </form>
          <button id='btn-next' onClick={nextStep}>Next</button>
          <br/>
          <small><i>Fields marked with * are required</i></small>
        </div>
      </div>  
    )
  }
}
      

export default FormUserDetails
