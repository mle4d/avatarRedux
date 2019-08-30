import React from 'react';
import PropTypes from 'prop-types';

function Characters({ characters }) {
  const abCharacters = characters.map(character => (
    <li key={character.id}>
      <character character={character}></character>
    </li>
  ));
  return (
    <ul>{abCharacters}</ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired

};

export default Characters;
