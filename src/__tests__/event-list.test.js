import React from 'react';
import { shallow, mount } from 'enzyme';

import EventList from '../components/event-list';

describe('<EventList />', () => {
  it('Renders without crashing', () => {
    shallow(<EventList />);
  });
});