import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../mockComponent';
import LoginScreen from './login';

describe('Component: LoginScreen', () => {
  it('should render correctly', () => {
    const sighInText = 'Sign in';
    const loginText = 'E-mail';
    const passwordText = 'Password';
    const {withStoreComponent } = withStore(<LoginScreen />);
    const preraredComponent = withHistory(withStoreComponent);

    render(preraredComponent);

    expect(screen.getByText(sighInText)).toBeInTheDocument();
    expect(screen.getByText(loginText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });
});
