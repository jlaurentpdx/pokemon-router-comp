import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
// import { MemoryRouter, Route } from 'react-router-dom';

// behavioral - what would a user do?

test('App renders a header to the page', async () => {
  render(<App />);

  const headings = screen.getAllByRole('heading');
  const list = await screen.findByRole('list', /regions/i);

  expect(headings).toHaveLength(4);
  expect(list.children).toHaveLength(8);
});

test.only('clicking on a region should render the correct list of Pokemon', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const kanto = await screen.findByRole('link', { name: /gen 1 \| kanto/i });

  userEvent.click(kanto);

  const pokemon = await screen.findByRole('link', { name: /squirtle/i });
  expect(pokemon).toBeInTheDocument();
});
