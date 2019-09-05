import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import PrivacyDetails from '../components/PrivacyDetails';


let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <PrivacyDetails 
      handlePrivacy={({}) => {}} 
      comTrayProducts=''
      comOtherProducts=''
      nextStep={() => {}} 
      prevStep={() => {}}
    />
    )
})

describe('<PrivacyDetails /> rendering', () => {
  it('PrivacyDetails: renders correctly', () => {
    const tree = renderer.create(
        <PrivacyDetails 
          handlePrivacy={({}) => {}} 
          comTrayProducts=''
          comOtherProducts=''
          nextStep={() => {}} 
          prevStep={() => {}}
        />).toJSON() 
    
    expect(tree).toMatchSnapshot();
});

  it('renders without crashing', () => {
    expect(wrapper)
  });

  it('should render 2 inputs fields for checkboxes', () => {
    expect(wrapper.find('input').length).toEqual(2);      
  });

  it('should render 2 buttons', () => {
    expect(wrapper.find('button').length).toEqual(2);      
  });
});

// describe('<PrivacyDetails /> interactions', () => {

//   it('should call the onClick function when \'Next\' button is clicked', () => { 
//       const nextStep = jest.fn();
//       const prevStep = jest.fn();
//       const wrapper = mount(
//           <PrivacyDetails 
//             handlePrivacy={({}) => {}} 
//             comTrayProducts=''
//             comOtherProducts=''
//             nextStep={nextStep} 
//             prevStep={prevStep}
//           />
//       );
//       wrapper.find('button').at[0].simulate('click');
//       expect(nextStep).toHaveBeenCalled();
//   });
// });
