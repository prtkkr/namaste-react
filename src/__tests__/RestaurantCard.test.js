import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MOCK_DATA from '../../mocks/RestaurantCard.mock.json';
import RestaurantCard, { withPromotedLabel } from '../components/RestaurantCard';

it('it should render Restaurant Card with props', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText('Chinese Wok');
  expect(name).toBeInTheDocument();
});

it('it should render withPromotedLabel component', () => {
  const WithPromotedLabel = withPromotedLabel(RestaurantCard);
  render(<WithPromotedLabel resData={MOCK_DATA} />);
  const name = screen.getByText('🟢');
  expect(name).toBeInTheDocument();
});
