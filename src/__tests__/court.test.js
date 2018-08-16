import React from 'react';
import { shallow, mount } from 'enzyme';

import Court from '../components/court';

describe('<Court />', () => {
  it('Renders without crashing', () => {
    shallow(<Court />);
  });
});