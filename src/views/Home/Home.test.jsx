import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import Home from './Home';

test('should display a header and welcome message', () => {
  render(
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
  const header = screen.getByRole('heading', { name: /getting started/i });
  const welcome = screen.getByText(/a tool for quickly finding/i);

  expect(header).toBeInTheDocument();
  expect(welcome).toBeInTheDocument();
});
