
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import FormUserDetails from '../components/FormUserDetails';

let wrapper;

beforeEach(() => {
    wrapper = shallow(
      <FormUserDetails 
          values={{name: '', role: '', email: '', password: '', formErrorsMessages: { name: '', role: '', email: '', password: ''}}} 
          handleChange={() => {}} 
          nextStep={() => {}} 
          handleSubmit = {() => {}}
      />
    )
});

describe('<ForUserDetails /> rendering', () => {

    it('ForUserDetails: renders correctly', () => {
        const tree = renderer.create(
            <FormUserDetails 
                values={{name: '', role: '', email: '', password: '', formErrorsMessages: { name: '', role: '', email: '', password: ''}}} 
                handleChange={() => {}} 
                nextStep={() => {}} 
                handleSubmit = {() => {}}
            />).toJSON() 
        
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper)
    });
  
    it('should render a <form /> to type the informations', () => {
        expect(wrapper.find('form').length).toEqual(1);      
    });
});

describe('<FormUserDetails /> interactions', () => {

    it('should call the onClick function when \'Next\' button is clicked', () => { 
        const nextStep = jest.fn();
        const handleChange = jest.fn();
        const handleSubmit = jest.fn();

        const wrapper = mount(
            <FormUserDetails 
                values={{name: '', role: '', email: '', password: '', formErrorsMessages: { name: '', role: '', email: '', password: ''}}} 
                handleChange={handleChange} 
                nextStep={nextStep}
                handleSubmit = {handleSubmit}
            />
        );
        wrapper.find('button').at(0).simulate('click');
        expect(nextStep).toHaveBeenCalled();
    });
});




