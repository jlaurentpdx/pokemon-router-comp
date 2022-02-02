import { useState, useEffect } from 'react';
import { fetchPokedexList, fetchRegionList } from './services/pokemon';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home/Home';
import Generation from './views/Generation/Generation';
import Regions from './components/Regions/Regions';

import styles from './App.css';

export default function App() {
  const [pokedexes, setPokedexes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Pokedexes
  useEffect(() => {
    const getPokedexes = async () => {
      const pokedexList = await fetchPokedexList();
      const regionList = await fetchRegionList();
      setPokedexes(pokedexList);
      setRegions(regionList);
      setLoading(false);
    };
    getPokedexes();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.left}>
          <h1>Pokémon Regions</h1>
          <Link to="/">Home</Link>
          <Regions {...{ regions, pokedexes }} />
        </div>

        <div className={styles.right}>
          <Route exact path="/" component={Home} />
          <Route path="/:generation" component={Generation} />
        </div>
      </div>
    </Router>
  );
}
