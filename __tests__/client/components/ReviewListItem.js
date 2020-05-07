import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewListItem from '../../../client/components/ReviewListItem';
import ReviewBadge from '../../../client/components/ReviewBadge';
import ReviewHeader from '../../../client/components/ReviewHeader';
import ReviewOwned from '../../../client/components/ReviewOwned';
import ReviewRecommend from '../../../client/components/ReviewRecommend';
import ReviewText from '../../../client/components/ReviewText';
import reviews from '../dummyData/dummyData';

Enzyme.configure({ adapter: new Adapter() });

const review = reviews[0];


describe('<ReviewListItem />', () => {
  it('Renders the verified badge.', () => {
    let wrapper = shallow(<ReviewListItem review={review} />);
    expect(wrapper.find(ReviewBadge)).toHaveLength(1);
  });

  it('Renders the header.', () => {
    let wrapper = shallow(<ReviewListItem review={review} />);
    expect(wrapper.find(ReviewHeader)).toHaveLength(1);
  });

  it('Renders the length of time owned.', () => {
    let wrapper = shallow(<ReviewListItem review={review} />);
    expect(wrapper.find(ReviewOwned)).toHaveLength(1);
  });

  it('Renders the recommendation.', () => {
    let wrapper = shallow(<ReviewListItem review={review} />);
    expect(wrapper.find(ReviewRecommend)).toHaveLength(1);
  });

  it('Renders the review text.', () => {
    let wrapper = shallow(<ReviewListItem review={review} />);
    expect(wrapper.find(ReviewText)).toHaveLength(1);
  });
});
