
import React from 'react';
import { shallow } from 'enzyme';
import FormUserDetails from '../components/FormUserDetails';

let wrapper;

beforeEach(() => {
    // props = createTestProps();
    wrapper = shallow(<FormUserDetails/> );
    debugger
});

describe('<ForUserDetails /> rendering', () => {
    it('should render a <form /> to type the informations', () => {
        expect(wrapper.find('.wrapper')).to.have.lengthOf(1);
    });

});

// describe('<FormUserDetails /> interactions', () => {
//     it('should call the onClick function when \'Next\' button is clicked', () => {
//         const mockedHandleClickAddComment = jest.fn()
//         wrapper.instance().handleClickAddComment = mockedHandleClickAddComment
//         wrapper.find('.btn-next').first().props().onClick()
//        expect(mockedHandleClickAddComment).toHaveBeenCalledTimes(1)
//     });

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
// });

