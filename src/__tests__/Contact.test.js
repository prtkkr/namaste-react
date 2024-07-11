import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

/* 'it' can be replaced with 'test'.
 * It is recommended to use either of them in the complete project.
 */
it('should render Contact component', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

it('should load button in the Contact component', () => {
  render(<Contact />);
  const button = screen.getByText('Submit');
  expect(button).toBeInTheDocument();
});

it('should load a textarea in the Contact component', () => {
  render(<Contact />);
  const textarea = screen.getByPlaceholderText('message');
  expect(textarea).toBeInTheDocument();
});

it('should load 3 input boxes in the Contact component', () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole('textbox');
  expect(inputBoxes.length).toBe(3);
});

it('should render input box with placehold email', () => {
  render(<Contact />);
  const emailInputBox = screen.getByPlaceholderText('email id');
  expect(emailInputBox).toBeInTheDocument();
});
