import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders', () => {
    render(<App />);
    expect(screen.getByText('Todo List')).toBeDefined();
  });
});
