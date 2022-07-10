import { render, screen } from '@testing-library/react';
import Base from "./components/Base"

test('renders learn react link', () => {
  render(<Base />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
