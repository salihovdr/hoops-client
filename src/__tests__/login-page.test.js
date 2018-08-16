import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginPage from '../components/login-page';

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage />);
  });
});