import { Link, useNavigate } from 'react-router-dom';
import {useRef, FormEvent, useCallback, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { loginAction } from '../store/apiActions';
import { getAuthorizationStatus } from '../store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../const';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const loginValue = loginRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    if (loginValue !== undefined && passwordValue !== undefined) {
      dispatch(loginAction({login: loginValue, password: passwordValue}));
    }
  }, []);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
