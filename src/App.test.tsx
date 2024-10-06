import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('IncreaseButton', () => {
  test('renders', () => {
    render(<App />);
    expect(screen.getByText('App Component')).toBeDefined();
  });
});
