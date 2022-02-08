import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sliceRegion } from '../../utils/utils';

import styles from './Regions.css';
import useRegionalDex from '../../hooks/useRegionalDex';

export default function Regions() {
  const { filterRegions, loading } = useRegionalDex();

  if (loading) return <p>Loading...</p>;

  return (
    <ul className={styles.list}>
      {filterRegions.map((region, index) => (
        <li key={region.name}>
          <Link to={`/${region.name}`}>
            Gen {index + 1} | {sliceRegion(region.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
