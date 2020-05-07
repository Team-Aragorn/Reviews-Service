import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../client/App';
import ReviewList from '../../client/components/ReviewList';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('Renders the review list.', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
});
