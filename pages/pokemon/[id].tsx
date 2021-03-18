import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../src/components/Link';

export default function Pokemon({ pokemon }) {
  const altImage = `You see a ${pokemon.name}`;

  return (
    <div>
      <h1>
        id:
        {' '}
        {pokemon.id}
      </h1>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.image}
        alt={altImage}
        width="96px"
        height="96px"
      />

      <div>
        <Link href="/">Take me to pokemons list.</Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    // eslint-disable-next-line consistent-return
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      // eslint-disable-next-line no-console
      console.log(`Pokemon ${params.id} is not available.`);
    })
    .then((response) => response);

  return {
    props: {
      pokemon: {
        id: params.id,
        name: pokemon?.species.name || '',
        image: pokemon?.sprites.front_default || '',
      },
    },
  };
}

export async function getStaticPaths() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Pokedex API not available');
    })
    .then((response) => response.pokemon_entries.map((entry) => ({ params: { id: `${entry.entry_number}` } })));

  return {
    paths: [
      ...pokemons,
    ],
    fallback: false,
  };
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
