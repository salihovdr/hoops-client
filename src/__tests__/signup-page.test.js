import React from 'react';
import { shallow, mount } from 'enzyme';

import SignUpPage from '../components/signup-page';

describe('<SignUpPage />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpPage />);
  });
});