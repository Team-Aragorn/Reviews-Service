import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewOwned from '../../../client/components/ReviewOwned';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewOwned />', () => {
  it('Displays ownership duration of 1 week.', () => {
    const wrapper = shallow(<ReviewOwned owned={1} />);
    expect(wrapper.html()).toMatch(/1 week/);
  });

  it('Displays ownership duration of 1 month.', () => {
    const wrapper = shallow(<ReviewOwned owned={2} />);
    expect(wrapper.html()).toMatch(/1 month/);
  });

  it('Displays ownership duration of 3 months.', () => {
    const wrapper = shallow(<ReviewOwned owned={3} />);
    expect(wrapper.html()).toMatch(/3 months/);
  });

  it('Displays ownership duration of 6 months.', () => {
    const wrapper = shallow(<ReviewOwned owned={4} />);
    expect(wrapper.html()).toMatch(/6 months/);
  });

  it('Displays ownership duration of 1 year or longer.', () => {
    const wrapper = shallow(<ReviewOwned owned={5} />);
    expect(wrapper.html()).toMatch(/1 year or longer/);
  });
});
