import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      disable: true,
      searchArtist: '',
      // load: false,
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    }, this.checkArtistSearch);
  }

  checkArtistSearch = () => {
    const { searchArtist } = this.state;
    const MIN_LETTER = 2;
    this.setState({
      disable: searchArtist.length < MIN_LETTER,
    });
  }

  render() {
    const { searchArtist, disable } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="searchArtist">
            <input
              name="searchArtist"
              type="text"
              data-testid="search-artist-input"
              value={ searchArtist }
              onChange={ this.handleChange }
            />
          </label>
          <button
            name="search"
            type="button"
            data-testid="search-artist-button"
            disabled={ disable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
