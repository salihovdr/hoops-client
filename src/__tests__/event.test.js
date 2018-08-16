import React from 'react';
import { shallow, mount } from 'enzyme';

import Event from '../components/event';

describe('<Event />', () => {
  it('Renders without crashing', () => {
    shallow(<Event />);
  });
});