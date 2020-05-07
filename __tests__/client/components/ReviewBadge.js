import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewBadge from '../../../client/components/ReviewBadge';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewBadge />', () => {
  it('Renders the verified badge when verified purchase.', () => {
    const wrapper = shallow(<ReviewBadge badge={true} />);
    expect(wrapper.html()).toMatch(/Verified/);
  });

  it('Omits the verified badge when unverified purchase.', () => {
    const wrapper = shallow(<ReviewBadge badge={false} />);
    expect(wrapper.html()).not.toMatch(/Verified/);
  });
});
