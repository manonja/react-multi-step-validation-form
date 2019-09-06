import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Success from '../components/Success';
import { FaRegThumbsUp } from 'react-icons/fa';


describe('<Success /> rendering', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<Success />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Success />);
  });

  it('renders a react icon', () => {
    shallow(<FaRegThumbsUp/>)
  }); 
});