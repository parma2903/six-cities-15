import { Link } from 'react-router-dom';
import SignOutButton from '../signOutButton/signOutButton';
import { useAppSelector } from '../../hooks/useApp';
import { AppRoute, AuthorizationStatus } from '../../const';
import { NavLink } from 'react-router-dom';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="#" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            {isLoggedIn ? (
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <SignOutButton />
                </li>
              </ul>
            ) : (
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Login}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
