import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders the main heading and count button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /count is/i })).toBeInTheDocument();
});
