import SignOutButton from '../signOutButton/signOutButton';
import { useAppSelector } from '../../hooks/useApp';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link, NavLink } from 'react-router-dom';
import { getAuthorizationStatus, getUser } from '../../store/user/selectors';
import { getFavoriteOffers } from '../../store/favoriteOffers/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
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
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${user?.avatarUrl})`}}></div>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
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
