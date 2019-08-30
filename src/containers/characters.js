import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCharacters from '../selectors/characterSelector';
import Characters from '../components/characters/Characters';
import { fetchCharacters } from '../actions/characters';
import { getCharacters } from '../services/avatarAPI';

class characters extends PureComponent {
  static PropTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const characters = this.props;
    return <Characters characters={characters} />;
  }
}
const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(getCharacters);
