import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import PrivacyDetails from './PrivacyDetails'
import Success from './Success'
import * as Constants from '../constants'

export class UserForm extends Component {

  state = {
    step: Constants.LOGIN_PAGE,
    name: '',
    role: '',
    email: '',
    password: '',
    formErrors: {
      name: "",
      email: "",
      password: ""
    },
    formIsValid: false,
    comTrayProduct: false,
    comOtherProducts: false
  }

  // Proceed to the next step on submit 
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // Proceed to the previous step on back 
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  // Handle user details with validation
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 2 ? "minimum 2 characaters required" : ""
        break;
      case "email":
        formErrors.email = Constants.EMAIL_REGEX.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrors.password = Constants.PASSWORD_CHECK.test(value) 
          ? "" 
          : "minimum 9 characaters required, at least 1 digit, 1 uppercase and 1 lowercase"
        break;
      default:
        break;
    }
    return this.setState({ formErrors, [name]: value },  () => console.log(this.state));
  }

  // Handle user privacy details
  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked})
  }

  render() {
    const { step, name, role, email, password, formErrors } = this.state
    const values = { name, role, email, password, formErrors }
    const { handleSubmit, handleChange, handlePrivacy, nextStep, prevStep } = this
    // eslint-disable-next-line default-case
    switch(step) {
      case Constants.LOGIN_PAGE: 
        return (
          <FormUserDetails 
            nextStep = {this.nextStep}
            handleChange = {handleChange}
            values = {values}
          />
        )
      case Constants.PRIVACY_PAGE:
        return (
          <PrivacyDetails 
            nextStep = {nextStep}
            prevStep = {prevStep}
            handlePrivacy = {handlePrivacy}
          />
        )     
      case Constants.SUCCESS_PAGE:
        return (
          <div>
          { console.log(JSON.stringify(this.state, 0, 2)) }
          <Success/>
          </div>
        )
    } 
  }
}

export default UserForm
