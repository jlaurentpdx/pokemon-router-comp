import React from 'react';

export default function Navigator() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Pokédex Navigator</h1>
        <Link to="/">Home</Link>
        <h2>Regions</h2>
        <Regions />
        <Route path="/:region/:name" component={PokeDetail} />
      </div>

      <div className={styles.right}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:region" component={Pokedex} />
        </Switch>
      </div>
    </div>
  );
}
