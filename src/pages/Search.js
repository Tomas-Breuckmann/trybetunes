import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { SearchMain, SearchContent, SearchContentResults,
  LinkStyled } from './Styles/search.styles';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      disable: true,
      searchArtist: '',
      // load: false,
      // artista: '',
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
      // { load: true },
      async () => {
        const resultado = await searchAlbumsAPI(searchArtist);
        // console.log(resultado);
        this.setState({
          // load: false,
          // artista: searchArtist,
          searchResults: resultado,
          searchArtist: '',
          showResults: true,
        });
      },
    );
  }

  render() {
    const { searchArtist, disable, searchResults, showResults } = this.state;
    return (
      <>
        <Header />
        <SearchMain>
          <SearchContent>
            <form onSubmit={ this.searchClick }>
              <input
                name="searchArtist"
                type="text"
                value={ searchArtist }
                onChange={ this.handleChange }
              />
              <button
                name="search"
                type="submit"
                data-testid="search-artist-button"
                disabled={ disable }
              >
                Entrar
              </button>
            </form>
          </SearchContent>
          {
            showResults && (
              (searchResults.length === 0) ? (<p>Nenhum álbum foi encontrado</p>)
                : (
                  <SearchContentResults>
                    {searchResults.map((ai) => ( // ai = albumInfo
                      <div key={ ai.collectionId }>
                        <img src={ ai.artworkUrl100 } alt={ ai.collectionName } />
                        <p>{ ai.collectionName }</p>
                        {/* <p>{ ai.artistName }</p> */}
                        <LinkStyled to={ `/album/${ai.collectionId}` }>
                          Search
                        </LinkStyled>
                      </div>
                    ))}
                  </SearchContentResults>
                )
            )
          }
        </SearchMain>
      </>
    );
  }
}

export default Search;
