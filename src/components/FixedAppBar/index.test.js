import { render, screen } from '@testing-library/react';
import { FixedAppBar } from './FixedAppBar';


test('closes menu when menu item is clicked', () => {
  render(<FixedAppBar />);
  
  // Click the "Order Now!" button to open the menu
  const orderButtonElement = screen.getByText(/Order Now!/i);
  orderButtonElement.click();

  // Assert that the menu is closed
  const menuElement = screen.queryByRole('menu');
  expect(menuElement).not.toBeInTheDocument();
});