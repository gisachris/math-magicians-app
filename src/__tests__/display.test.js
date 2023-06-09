import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/home';
import AppHolder from '../components/calculator';
import Quote from '../components/quote';

describe('testing all UI components', () => {
  test('homePage UI testing', () => {
    render(<HomePage />);

    expect(screen.getByText(/Welcome to our Page!/)).toBeInTheDocument();
    expect(screen.getByTestId('homeHolder')).toBeInTheDocument();
  });

  test('calculatorPage UI testing', () => {
    render(<AppHolder />);

    expect(screen.getByTestId('calcWhole')).toBeInTheDocument();
  });
});

describe('QuotesPage UI testing', () => {
  test('renders "quote is loading..." message', () => {
    render(<Quote />);
    expect(screen.queryByText('quote is loading...')).toBeInTheDocument();
  });

  test('renders fetched quotes correctly', async () => {
    const mockResponse = [{ quote: 'To be or not to be', author: 'William Shakespeare' }];
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
    render(<Quote />);
    await waitFor(() => expect(screen.queryByTestId('quotes')).toBeInTheDocument());
    expect(screen.queryAllByTestId('quotes')).toHaveLength(1);
    expect(screen.queryByText('To be or not to be')).toBeInTheDocument();
    expect(screen.queryByText('ByWilliam Shakespeare')).toBeInTheDocument();
    delete global.fetch;
  });

  test('handles API errors', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('API down')));
    render(<Quote />);
    await waitFor(() => expect(screen.queryByTestId('quotes')).toBeNull());
    delete global.fetch;
  });

  test('handles empty quotes', async () => {
    const mockResponse = [];
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
    render(<Quote />);
    await waitFor(() => expect(screen.queryByTestId('quotes')).toBeNull());
    delete global.fetch;
  });
});

describe('HomePage Snaphots', () => {
  it('homePage renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('calculator Snaphots', () => {
  it('calculator renders correctly', () => {
    const tree = renderer.create(<AppHolder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('QuotePage Snapshots', () => {
  it('QuotePage renders correctly with no props', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with text prop', () => {
    const tree = renderer.create(<Quote text="This is a quote." />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with author prop', () => {
    const tree = renderer.create(<Quote author="John Doe" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with both props', () => {
    const tree = renderer.create(<Quote text="This is a quote." author="John Doe" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
