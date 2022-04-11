import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from './Contact';

it('renders without crashing', () => {
  render(<Contact />);

  const challenge = screen.getByText(/are you worthy/i);
  expect(challenge).toBeInTheDocument();
});
