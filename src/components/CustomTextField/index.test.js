import { render, screen, fireEvent } from '@testing-library/react';
import CustomTextField from './CustomTextField';

test('renders CustomTextField component', () => {
  const mockOnChange = jest.fn();
  render(
    <CustomTextField
      id="test-id"
      name="test-name"
      label="Test Label"
      type="text"
      value="Test Value"
      onChange={mockOnChange}
      multiline={false}
      rows={1}
    />
  );

  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeInTheDocument();
  expect(textFieldElement).toHaveValue('Test Value');

  fireEvent.change(textFieldElement, { target: { value: 'New Value' } });
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});