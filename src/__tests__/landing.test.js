import React from 'react';
import { shallow, mount } from 'enzyme';

import Landing from '../components/landing';

describe('<Landing />', () => {
  it('Renders without crashing', () => {
    shallow(<Landing />);
  });
});