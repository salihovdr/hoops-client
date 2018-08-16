import React from 'react';
import { shallow, mount } from 'enzyme';

import CourtSearchForm from '../components/court-search-form';

describe('<CourtSearchForm />', () => {
  it('Renders without crashing', () => {
    shallow(<CourtSearchForm />);
  });
});