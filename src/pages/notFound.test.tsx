import { withHistory } from '../mockComponent';
import NotFoundScreen from './not-found';
import { render, screen } from '@testing-library/react';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404. Page not found';
    const expectedLinkText = 'Вернуться на главную';
    const preparedComponent = withHistory(<NotFoundScreen />);

    render(preparedComponent);

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
