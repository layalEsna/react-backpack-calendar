// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// src/App.test.js

// --- hoist these mocks first! ---
jest.mock('@mui/x-date-pickers/DatePicker', () => ({
  DatePicker: ({ renderInput }) => renderInput({}),
}));
jest.mock('@mui/x-date-pickers/AdapterDateFns', () => ({
  AdapterDateFns: () => null,
}));
jest.mock('@mui/x-date-pickers/LocalizationProvider', () => ({
  LocalizationProvider: ({ children }) => <>{children}</>,
}));

// now import React‑Testing‑Library and your App
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Flight Schedule header', () => {
  render(<App />);
  expect(screen.getByText(/Flight Schedule/i)).toBeInTheDocument();
});
