import React from 'react';
import { Link } from '../src/components/Link';

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Pokedex API not available.');
    })
    .then((response) => response.pokemon_entries);

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home(props) {
  // eslint-disable-next-line react/prop-types
  const { pokemons } = props;

  return (
    <div>
      Pokédex. Total of
      {' '}
      {/* eslint-disable-next-line react/prop-types */}
      {pokemons.length}
      {' '}
      pokemons and counting.
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About this project
            </Link>
          </li>
        </ul>
      </nav>

      <ul>
        { /* eslint-disable-next-line react/prop-types */}
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              {pokemon.pokemon_species.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
