
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import FormUserDetails from '../components/FormUserDetails';

let wrapper;

beforeEach(() => {
    wrapper = shallow(
      <FormUserDetails 
          values={{name: '', role: '', email: '', password: '', formErrors: { name: '', role: '', email: '', password: ''}}} 
          handleChange={jest.fn()} 
          nextStep={jest.fn()} 
      />
      )
    });

describe('<ForUserDetails /> rendering', () => {

    it('ForUserDetails: renders correctly', () => {
        const tree = renderer.create(
            <FormUserDetails 
                values={{name: '', role: '', email: '', password: '', formErrors: { name: '', role: '', email: '', password: ''}}} 
                handleChange={() => {}} 
                nextStep={() => {}} 
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
        const wrapper = mount(
            <FormUserDetails 
                values={{name: '', role: '', email: '', password: '', formErrors: { name: '', role: '', email: '', password: ''}}} 
                handleChange={jest.fn()} 
                nextStep={nextStep}
            />
        );
        wrapper.find('button').at(0).simulate('click');
        expect(nextStep).toHaveBeenCalled();
    });


//     it('should change the state name when the onChange function of the input is invoked', () => {
//         wrapper.find('#input-form-name').simulate('change',
//             { target: { value: 'New name' } }
//         );
//         expect(wrapper.state('name')).toEqual('New name')
//     });

//     it('should change the state email when the onChange function of the input is invoked', () => {
//       wrapper.find('#input-form-email').simulate('change',
//           { target: { value: 'New email' } }
//       );
//       expect(wrapper.state('email')).toEqual('New email')
//     });

//     it('should change the state role when the onChange function of the input is invoked', () => {
//       wrapper.find('#input-form-role').simulate('change',
//           { target: { value: 'New role' } }
//       );
//       expect(wrapper.state('role')).toEqual('New role')
//     });

//     it('should change the state password when the onChange function of the input is invoked', () => {
//         wrapper.find('#input-form-password').simulate('change',
//             { target: { value: 'New password' } }
//         );
//         expect(wrapper.state('password')).toEqual('New password')
//     });
});


