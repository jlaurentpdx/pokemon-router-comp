import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import App from './App';

test('App renders a header to the page', async () => {
  render(<App />);

  const headings = screen.getAllByRole('heading');
  const list = await screen.findByRole('list', /regions/i);

  expect(headings).toHaveLength(4);
  expect(list.children).toHaveLength(8);
});

test('clicking on a region should render the correct list of Pokemon', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const region = await screen.findByRole('link', { name: /gen 1 \| kanto/i });
  userEvent.click(region);

  const pokemon = await screen.findByRole('link', { name: /squirtle/i });
  expect(pokemon).toBeInTheDocument();
});

test('clicking on a region should render a pokemon detail view', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const region = await screen.findByRole('link', { name: /gen 2 \| johto/i });
  userEvent.click(region);

  const pokemon = await screen.findByRole('link', { name: /totodile/i });
  userEvent.click(pokemon);

  const name = await screen.findByRole('heading', { name: /totodile/i });
  expect(name).toBeInTheDocument();
});

test.only('clicking on Home link renders intro text', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const region = await screen.findByRole('link', { name: /gen 8 \| galar/i });
  userEvent.click(region);

  const pokemon = await screen.findByRole('link', { name: /sobble/i });
  userEvent.click(pokemon);

  const name = await screen.findByRole('heading', { name: /sobble/i });
  expect(name).toBeInTheDocument();

  const home = screen.getByRole('link', { name: /home/i });
  userEvent.click(home);

  const homeHeading = screen.getByRole('heading', { name: /getting started/i });

  expect(homeHeading).toBeInTheDocument();
});
