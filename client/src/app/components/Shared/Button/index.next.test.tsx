import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { expect, test, describe, vi, beforeEach } from 'vitest';
import Button from './index';

describe('Button Component', () => {
  beforeEach(() => {
    cleanup();
  });

  test('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);

    expect(screen.getByText('Click me')).toBeDefined();
  });

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click me'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
