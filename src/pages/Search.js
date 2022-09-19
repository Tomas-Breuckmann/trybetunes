import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
// import '../css/search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      disable: true,
      searchArtist: '',
      load: false,
      artista: '',
      searchResults: [],
      showResults: false,
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

  searchClick = (event) => {
    event.preventDefault();
    this.searchResult();
  }

  async searchResult() {
    const { searchArtist } = this.state;
    this.setState(
      { load: true },
      async () => {
        const resultado = await searchAlbumsAPI(searchArtist);
        // console.log(resultado);
        this.setState({
          load: false,
          artista: searchArtist,
          searchResults: resultado,
          searchArtist: '',
          showResults: true,
        });
      },
    );
  }

  render() {
    const { searchArtist, disable, load, searchResults, artista,
      showResults } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="form-container">
          <form onSubmit={ this.searchClick }>
            <label htmlFor="searchArtist">
              <input
                className="search-input"
                name="searchArtist"
                type="text"
                data-testid="search-artist-input"
                value={ searchArtist }
                onChange={ this.handleChange }
              />
            </label>
            <button
              // className="button is-primary"
              name="search"
              type="submit"
              data-testid="search-artist-button"
              disabled={ disable }
            >
              Entrar
            </button>
          </form>
        </div>
        {
          load && <Loading />
        }
        {
          showResults && (
            (searchResults.length === 0) ? (<p>Nenhum álbum foi encontrado</p>)
              : (
                <div>
                  <p>
                    Resultado de álbuns de:
                    {' '}
                    { artista }
                  </p>
                  <div className="todos-albuns">
                    {searchResults.map((ai) => ( // ai = albumInfo
                      <div key={ ai.collectionId } className="cada-album">
                        <img src={ ai.artworkUrl100 } alt={ ai.collectionName } />
                        <p>{ ai.collectionName }</p>
                        <p>{ ai.artistName }</p>
                        <Link
                          to={ `/album/${ai.collectionId}` }
                          data-testid={ `link-to-album-${ai.collectionId}` }
                        >
                          Search
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )
        }
      </div>
    );
  }
}

export default Search;
