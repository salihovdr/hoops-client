import React from 'react';
import { shallow, mount } from 'enzyme';

import Navbar from '../components/navbar';

describe('<Navbar />', () => {
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });
});