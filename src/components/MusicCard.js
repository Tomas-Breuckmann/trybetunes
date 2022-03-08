import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      checked: false,
    };
  }

  handleChange = (event) => {
    const { musica } = this.props;
    console.log(event.target.checked);
    // const { checked } = this.state;
    this.setState({ checked: event.target.checked },
      () => this.favoritaMusica(musica));
  }

  favoritaMusica(musica) {
    const { checked } = this.state;
    if (checked) {
      this.setState(
        { loading: true },
        async () => {
          await addSong(musica);
          this.setState({
            loading: false });
        },
      );
    }
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
