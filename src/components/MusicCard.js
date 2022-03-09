import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      checked: false,
    };
  }

  async componentDidMount() {
    this.setState(
      { loading: true },
      async () => {
        const favoriteSongs = await getFavoriteSongs();
        const { musica } = this.props;
        const { trackId } = musica;
        // console.log(trackId);
        console.log(favoriteSongs.some((music) => music.trackId === trackId));
        this.setState({
          loading: false,
          checked: favoriteSongs.some((music) => music.trackId === trackId) });
      },
    );
  }

  handleChange = (event) => {
    const { musica } = this.props;
    this.setState({ checked: event.target.checked },
      () => this.favoritaMusica(musica));
  }

  favoritaMusica(musica) {
    const { checked } = this.state;
    this.setState(
      { loading: true },
      async () => {
        if (checked) {
          await addSong(musica);
        } else {
          await removeSong(musica);
        }
        this.setState({
          loading: false });
      },
    );
  }

  render() {
    const { musica } = this.props;
    const { trackName, previewUrl, trackId } = musica;
    const { checked, loading } = this.state;
    // console.log(musica);
    return (
      <div>
        {
          loading && <Loading />
        }
        { trackName }
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor="favorite">
          Favorita
          <input
            name="favorite"
            type="checkbox"
            value="music"
            checked={ checked }
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

// solução para arrumar o propTypes corretamente foi proposta por Imar: https://github.com/tryber/sd-019-a-project-trybetunes/pull/1/files
MusicCard.propTypes = {
  musica: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,
};

export default MusicCard;
