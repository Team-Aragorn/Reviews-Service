import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewHeader from '../../../client/components/ReviewHeader';

import reviews from '../dummyData/dummyData';

Enzyme.configure({ adapter: new Adapter() });

const review = reviews[0];
let wrapper;

describe('<ReviewHeader />', () => {
  beforeEach(() => {
    wrapper = mount(<ReviewHeader review={review} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Renders the stars.', () => {
    expect(wrapper.find('.ReviewHeader__Stars-ing2o2-1')).toHaveLength(1);
  });

  it('Renders the nickname.', () => {
    expect(wrapper.find('.ReviewHeader__Nickname-ing2o2-3')).toHaveLength(1);
  });

  it('Renders the date.', () => {
    expect(wrapper.find('.ReviewHeader__Date-ing2o2-4')).toHaveLength(1);
  });

  it('Renders the title.', () => {
    expect(wrapper.find('.ReviewHeader__Title-ing2o2-5')).toHaveLength(1);
  });
});
