import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/navigator">Navigator</Link>
      <Route path="/navigator">
        <Navigator />
      </Route>
      <h1>Getting Started</h1>
      <p style={{ width: '30vw', textTransform: 'none' }}>
        The Pokedex Navigator is a tool for quickly finding basic information
        about Pokemon from each Region. Select a Region from the left side of
        the page to get started.
      </p>
    </>
  );
}
