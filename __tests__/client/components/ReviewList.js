import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewList from '../../../client/components/ReviewList';
import ReviewListItem from '../../../client/components/ReviewListItem';

import reviews from '../dummyData/dummyData';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewList />', () => {

  it('Renders the review list.', () => {
    const wrapper = shallow(<ReviewList reviews={reviews}/>, { disableLifecycleMethods: true });
    expect(wrapper.find(ReviewListItem)).toHaveLength(3);
  });
});
