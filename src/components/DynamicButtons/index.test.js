import { render, screen } from '@testing-library/react';
import { DynamicButtons } from './DynamicButtons';

test('renders dynamic buttons with correct content', () => {
  const content = {
    cta: 'Button 1',
    ctaLink: 'https://example.com/button1',
    ctaDownload: false,
    cta2: 'Button 2',
    cta2Link: 'https://example.com/button2',
    cta2Download: true,
    cta3: 'Button 3',
    cta3Link: 'https://example.com/button3',
    cta3Download: false,
  };

  render(<DynamicButtons content={content} index={0} />);

  const button1 = screen.getByText('Button 1');
  expect(button1).toBeInTheDocument();
  expect(button1).toHaveAttribute('href', 'https://example.com/button1');
  expect(button1).not.toHaveAttribute('download');

  const button2 = screen.getByText('Button 2');
  expect(button2).toBeInTheDocument();
  expect(button2).toHaveAttribute('href', 'https://example.com/button2');
  expect(button2).toHaveAttribute('download');

  const button3 = screen.getByText('Button 3');
  expect(button3).toBeInTheDocument();
  expect(button3).toHaveAttribute('href', 'https://example.com/button3');
  expect(button3).not.toHaveAttribute('download');
});