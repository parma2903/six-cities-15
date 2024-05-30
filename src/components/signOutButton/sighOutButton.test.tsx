import { render, screen } from '@testing-library/react';
import SignOutButton from './signOutButton';
import { withHistory, withStore } from '../../mockComponent';

describe('Component: SighOutButton', () => {
  it('should render correctly', () => {
    const expectedText = 'Sign out';
    const { withStoreComponent } = withStore(<SignOutButton />);
    const preraredComponent = withHistory(withStoreComponent);

    render(preraredComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
