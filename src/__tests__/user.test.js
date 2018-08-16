import React from 'react';
import { shallow, mount } from 'enzyme';

import User from '../components/user';

describe('<User />', () => {
  it('Renders without crashing', () => {
    shallow(<User />);
  });
});