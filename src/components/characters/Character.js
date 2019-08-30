import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <>
    <img src={character.img} />
    <p>{character.name}</p>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
