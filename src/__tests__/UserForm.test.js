import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import UserForm from '../components/UserForm';


let wrapper;

beforeEach(() => {
  wrapper = shallow(<UserForm/>)
})

describe('<UserForm/> Rendering', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<UserForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders without crashing', () => {
    shallow(<UserForm />);
  });
  
  it('should render a <FormUserDetails> component', () => {
    expect(wrapper.find('FormUserDetails').length === 1) 
  });

  it('should render a <PrivacyDetails> component', () => {
    expect(wrapper.find('PrivacyDetails').length === 1)  
  });

  it('should render a <Success> component', () => {
    expect(wrapper.find('Success').length === 1)   
  });
})
