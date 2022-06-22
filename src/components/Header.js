import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../css/header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario: {},
      load: false,
    };
  }

  componentDidMount() {
    this.retornoGetUser();
  }

  async retornoGetUser() {
    this.setState(
      { load: true },
      async () => {
        const user = await getUser();
        // console.log(user.name);
        this.setState({
          load: false,
          usuario: user,
        });
      },
    );
  }

  render() {
    const { load, usuario } = this.state;
    return (
      <header className="header-container" data-testid="header-component">
        <div className="header-links-container">
          <Link className="link" to="/search" data-testid="link-to-search"> Search</Link>
          <Link
            className="link"
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favorites
          </Link>
          <Link
            className="link"
            to="/profile"
            data-testid="link-to-profile"
          >
            Profile
          </Link>
        </div>
        {
          load && <Loading />
        }
        <div className="header-name">
          <h2 data-testid="header-user-name">{ usuario.name }</h2>
        </div>
      </header>
    );
  }
}

export default Header;
