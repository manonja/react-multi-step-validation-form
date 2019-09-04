import React from 'react';
import { shallow } from 'enzyme';
import PrivacyDetails from '../components/PrivacyDetails';

let wrapper;

beforeEach(() => {
    // props = createTestProps();
    wrapper = shallow(<PrivacyDetails/> );
});

describe('<PrivacyDetails /> rendering', () => {
  it('should render a specific text ', () => {
    expect(wrapper.contains('[htmlFor="comTrayProduct"]'))  
  });
});