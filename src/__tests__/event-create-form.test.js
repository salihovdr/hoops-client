import React from 'react';
import { shallow, mount } from 'enzyme';

import EventForm from '../components/event-create-form';

describe('<EventForm />', () => {
  it('Renders without crashing', () => {
    shallow(<EventForm />);
  });
});