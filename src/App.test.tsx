import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders home page', () => {
  const { container } = render(
    <App />,
  );
  expect(container).toMatchSnapshot();
});
