import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewText from '../../../client/components/ReviewText';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewText />', () => {
  it('Displays the review text.', () => {
    const wrapper = shallow(<ReviewText review={'This game is great!'} />);
    expect(wrapper.html()).toMatch(/This game is great!/);
  });
});
