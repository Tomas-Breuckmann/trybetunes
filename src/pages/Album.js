import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      listaMusicas: [],
      showResults: false,
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // const { id } = this.props.match.params;
    // console.log(this.props);
    this.geraListaMusicas(id);
  }

  async geraListaMusicas(id) {
    this.setState(
      { loading: true,
        showResults: false },
      async () => {
        const resultado = await getMusics(id);
        // console.log(resultado);
        this.setState({
          loading: false,
          listaMusicas: resultado,
          showResults: true,
        });
      },
    );
  }

  render() {
    const { loading, listaMusicas, showResults } = this.state;
    const lmr = listaMusicas.filter((music, index) => index >= 1);
    // console.log(lmr);
    return (
      <div data-testid="page-album">
        <Header />
        {
          loading && <Loading />
        }
        {
          showResults && (
            <div>
              <img
                src={ listaMusicas[0].artworkUrl100 }
                alt={ listaMusicas[0].collectionName }
              />
              <p data-testid="artist-name">
                { listaMusicas[0].artistName }
              </p>
              <p data-testid="album-name">
                { listaMusicas[0].collectionName }
              </p>
              {lmr.map((musica) => (
                <div key={ musica.trackId }>
                  <MusicCard musica={ musica } />
                </div>
              ))}
            </div>
          )
        }

      </div>
    );
  }
}

// solução para arrumar o propTypes corretamente foi proposta por Imar: https://github.com/tryber/sd-019-a-project-trybetunes/pull/1/files
// Album.propTypes = {
// match: PropTypes.shape({
//   params: PropTypes.shape({
//     id: PropTypes.string,
//   }),
// }).isRequired,
// };

Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;
