import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewRecommend from '../../../client/components/ReviewRecommend';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewRecommend />', () => {
  it('Displays recommendation status if game is recommended.', () => {
    const wrapper = shallow(<ReviewRecommend recommend={true} />);
    expect(wrapper.html()).toMatch(/I recommend/);
  });

  it('Displays recommendation status if game is not recommended.', () => {
    const wrapper = shallow(<ReviewRecommend recommend={false} />);
    expect(wrapper.html()).toMatch(/I do not recommend/);
  });
});
