import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/> Rendering', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders without crashing', () => {
      shallow(<App />);
    });
  
  it('should render a <UserForm> component', () => {
    const wrapper = shallow(<App /> )
    expect(wrapper.find('UserForm').length === 1)
    
  })
})


