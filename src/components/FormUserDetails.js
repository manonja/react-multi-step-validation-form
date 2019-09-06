import React from 'react';

const FormUserDetails = ( {values, handleChange, nextStep} ) => {

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className='page-detail'>
          <h3 className="alignleft">User Details</h3>
          <p className="aligncenter">Privacy</p>
          <p className="alignright">Done</p>
        </div>
        <form noValidate className="form">
          <div className="name">
            <input
              id="input-form-name"
              className={values.formErrorsMessages.name.length > 0 ? "error" : null}
              placeholder="Name *"
              autoComplete="current-name"
              type="text"
              name="name"
              noValidate
              onChange={handleChange}
              defaultValue={values.name}
            />
            {values.formErrorsMessages.name.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.name}</span>
            )}
          </div>
          <div className="role">
            <input
              id="input-form-role"
              placeholder="Role"
              autoComplete="current-role"
              type="text"
              name="role"
              onChange={handleChange}
              defaultValue={values.role}
            />
          </div>
          <div className="email">
            <input
              id="input-form-email"
              className={values.formErrorsMessages.email.length > 0 ? "error" : null}
              placeholder="Email *"
              autoComplete="current-email"
              type="email"
              name="email"
              onChange={handleChange}
              defaultValue={values.email}
            />
            {values.formErrorsMessages.email.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.email}</span>
            )}
          </div>
          <div className="password">
            <input
              id="input-form-password"
              className={values.formErrorsMessages.password.length > 0 ? "error" : null}
              placeholder="Password *"
              autoComplete="current-password"
              type="password"
              name="password"
              onChange={handleChange}
              defaultValue={values.password}
            />
            {values.formErrorsMessages.password.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.password}</span>
            )}
          </div>
          <button 
            type="submit" 
            id='btn-next' 
            onClick={nextStep}
          >
            Next
          </button>
        </form>
        <br/>
        <small><i>Fields marked with * are required</i></small>
      </div>
    </div>  
  )
};
    

export default FormUserDetails;
