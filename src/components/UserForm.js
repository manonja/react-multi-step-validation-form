import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import PrivacyDetails from './PrivacyDetails';
import Success from './Success';
import * as Constants from '../constants';


export class UserForm extends Component {

  state = {
    step: Constants.LOGIN_PAGE,
    name: null,
    role: null,
    email: null,
    password: null,
    formErrorsMessages: {
      name: "",
      email: "",
      password: ""
    },
    comTrayProduct: false,
    comOtherProducts: false
  };

  // Proceed to the next step and block is invalid form 
  nextStep = (e) => {
    e.preventDefault()
    const { step } = this.state

    if (Constants.FORM_VALID(this.state)) {
      this.setState({
        step: step + 1
      })
    } else {
      alert("FORM INVALID");
    }
  };

  // Proceed to the previous step on back button 
  prevStep = (e) => {
    e.preventDefault()
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  };

  // Handle user details with validation
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrorsMessages = { ...this.state.formErrorsMessages };

    switch (name) {
      case "name":
        formErrorsMessages.name = Constants.NAME_CHECK(value) ? "" : "minimum 2 characaters required" 
        break;
      case "email":
        formErrorsMessages.email = Constants.EMAIL_REGEX.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrorsMessages.password = Constants.PASSWORD_CHECK.test(value) 
          ? "" 
          : "minimum 9 characaters required, at least 1 digit, 1 uppercase and 1 lowercase"
        break;
      default:
        break;
    }   
    this.setState({ formErrorsMessages, [name]: value });
  };

  // Handle user privacy details
  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked})
  };

  render() {
    const { step, name, role, email, password, formErrorsMessages } = this.state
    const values = { name, role, email, password, formErrorsMessages }
    const { handleChange, handlePrivacy, nextStep, prevStep, handleSubmit} = this
    // eslint-disable-next-line default-case
    switch(step) {
      case Constants.LOGIN_PAGE: 
        return (
          <FormUserDetails 
            nextStep = {this.nextStep}
            handleChange = {handleChange}
            values = {values}
            handleSubmit = {handleSubmit}
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
          { console.log(`
            --SUBMITTING--
            ${JSON.stringify(this.state, 0, 2)}`) 
          }
          <Success
            prevStep = {prevStep}
          />
          </div>
        )
    } 
  }
};

export default UserForm;
