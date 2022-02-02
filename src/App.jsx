import { useState, useEffect } from 'react';
import { fetchPokedexByGen, fetchPokedexList } from './services/pokemon';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './views/Home/Home';
import Generation from './views/Generation/Generation';
import Controls from './components/Controls/Controls';

import styles from './App.css';

export default function App() {
  const [pokedexes, setPokedexes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Pokedexes
  useEffect(() => {
    const getPokedexes = async () => {
      const pokedexList = await fetchPokedexList();
      setPokedexes(pokedexList);
    };
    getPokedexes();
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <div className={styles}>
          <h1>Pokémon Regions</h1>
          <Link to="/">Home</Link>
          <Controls {...{ pokedexes }} />
        </div>

        <div className="right" style={{ width: '50vw' }}>
          <Route exact path="/" component={Home} />
          <Route path="/:generation" component={Generation} />
        </div>
      </div>
    </Router>
  );
}
