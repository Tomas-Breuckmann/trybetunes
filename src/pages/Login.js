import React from 'react';
import { Redirect } from 'react-router-dom';
// import { button } from 'antd';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disable: true,
      name: '',
      load: false,
      redirect: false,
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    }, this.checkForm);
  }

  checkForm = () => {
    const { name } = this.state;
    const MAX_CHAR = 3;
    this.setState({
      disable: name.length < MAX_CHAR,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    this.retornoCreateUser();
  }

  async retornoCreateUser() {
    this.setState(
      { load: true,
        redirect: false },
      async () => {
        const { name } = this.state;
        await createUser({ name });
        this.setState({
          load: false,
          redirect: true,
        });
      },
    );
  }

  render() {
    const { disable, name, load, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <form onSubmit={ this.submitForm }>
          <label htmlFor="name">
            Nome:
            <input
              name="name"
              type="text"
              data-testid="login-name-input"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <button
            name="submit"
            type="submit"
            data-testid="login-submit-button"
            disabled={ disable }
          >
            Entrar
          </button>
        </form>
        {
          load && <Loading />
        }
        {
          redirect && <Redirect to="/search" />
        }
      </div>
    );
  }
}

export default Login;
