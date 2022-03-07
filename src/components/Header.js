import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
      <header data-testid="header-component">
        Este é o cabeçalho
        <Link to="/search" data-testid="link-to-search"> Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites"> Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile"> Profile</Link>
        {
          load && <Loading />
        }
        <p data-testid="header-user-name">{ usuario.name }</p>
      </header>
    );
  }
}

export default Header;
