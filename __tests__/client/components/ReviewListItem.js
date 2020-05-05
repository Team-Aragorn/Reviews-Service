import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewListItem from '../../../client/components/ReviewListItem';

Enzyme.configure({ adapter: new Adapter() });

const review = {
  gameId: 0,
  date: Date.now(),
  overall: 1,
  title: 'The Title',
  review: '',
  recommend: false,
  nickname: '',
  location: '',
  email: '',
  buyForSelf: false,
  ageBracket: 1,
  gender: 1,
  graphics: 1,
  gameplay: 1,
  appeal: 1,
  ownershipBracket: 1,
  purchaseOnline: false,
  readReviews: false,
  recommendBGS: 1,
  meta: {
    helpful: 1,
    unhelpful: 1,
  },
};

describe('<ReviewListItem />', () => {

  it('Renders the title', () => {
    const wrapper = shallow(<ReviewListItem review={review}/>);
    expect(wrapper.contains(<h4>The Title</h4>)).toBe(true);
  });
});
