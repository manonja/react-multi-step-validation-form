import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../components/UserForm';

describe('<UserForm/> Rendering', () => {
  
  it('renders without crashing', () => {
      shallow(<UserForm />);
  });
  
  it('should render a <FormUserDetails> component', () => {
    const wrapper = shallow(<UserForm /> )
    expect(wrapper.find('FormUserDetails').length === 1) 
  });

  it('should render a <PrivacyDetails> component', () => {
    const wrapper = shallow(<UserForm /> )
    expect(wrapper.find('PrivacyDetails').length === 1)  
  });

  it('should render a <Success> component', () => {
    const wrapper = shallow(<UserForm /> )
    expect(wrapper.find('Success').length === 1)   
  });
})
