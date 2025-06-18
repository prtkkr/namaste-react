import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppStore from '../store/AppStore';
import Header from '../components/Header';
import '@testing-library/jest-dom';

it('should render Header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});

it('should load Header Component with Cart (0)', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartButton = screen.getByRole('link', { name: 'Cart (0)' });
  expect(cartButton).toBeInTheDocument();
});

it('should load Header Component with Cart', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartButton = screen.getByRole('link', { name: /Cart/ });
  expect(cartButton).toBeInTheDocument();
});

it('should change Login button to Logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: /Login/i });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole('button', { name: /Logout/i });
  expect(logoutButton).toBeInTheDocument();
});
