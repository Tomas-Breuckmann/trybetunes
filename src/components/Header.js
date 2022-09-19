import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import { HeaderMain, HeaderContent, StyledLink } from './Styles/header.styles';
// import '../css/header.css';

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
      <HeaderMain>
        <HeaderContent>
          <div>
            <StyledLink className="link" to="/search"> Search</StyledLink>
            {/* <Link
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
            </Link> */}
          </div>
          <div className="header-name">
            <h2 data-testid="header-user-name">{ usuario.name }</h2>
          </div>
          {
            load && <Loading />
          }
        </HeaderContent>
      </HeaderMain>
    );
  }
}

export default Header;
