import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/> Rendering', () => {
  
  it('renders without crashing', () => {
      shallow(<App />);
    });
  
  it('should render a <UserForm> component', () => {
    const wrapper = shallow(<App /> )
    expect(wrapper.find('UserForm').length === 1)
    
  })
})


