import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import Pokedex from './views/Pokedex/Pokedex';
import Regions from './views/Regions/Regions';
import PokeDetail from './views/PokeDetail/PokeDetail';

import styles from './App.css';

export default function App() {
  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.left}>
          <h1>Pokédex Navigator</h1>
          <Link to="/">Home</Link>
          <h2>Regions</h2>
          <Regions />
          <Route path="/:generation/:name" component={PokeDetail} />
        </div>

        <div className={styles.right}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:generation" component={Pokedex} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
