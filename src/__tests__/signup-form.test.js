import React from 'react';
import { shallow, mount } from 'enzyme';

import RegistrationForm from '../components/signup-form';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });
});