import React from 'react';
import { shallow, mount } from 'enzyme';

import CourtList from '../components/court-list';

describe('<CourtList />', () => {
  it('Renders without crashing', () => {
    shallow(<CourtList />);
  });
});