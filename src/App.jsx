import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home/Home';
import Pokedex from './views/Pokedex/Pokedex';
import Regions from './components/Regions/Regions';
import PokeDetail from './components/PokeDetail/PokeDetail';

import styles from './App.css';

export default function App() {
  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.left}>
          <h1>Pokémon Regions</h1>
          <Link to="/">Home</Link>
          <Regions />
          <Route path="/:generation/:name" component={PokeDetail} />
        </div>

        <div className={styles.right}>
          <Route exact path="/" component={Home} />
          <Route path="/:generation" component={Pokedex} />
        </div>
      </div>
    </Router>
  );
}
