import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Counter from '../Counter';
import { Provider } from 'react-redux';

import { store } from '../../store/Store';
import { reset } from '../../reducers/CounterReducer';



describe('Counter component', () => {
  beforeEach(()=>{
    store.dispatch(reset())
  })
  describe('Initial rendering', () => {
    test('renders counter with initial value', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      expect(getByText('Counter :0')).toBeInTheDocument();
    });
  });

  describe('Increment', () => {
    test('increments count when Increment button is clicked', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      fireEvent.click(getByText('Increment'));
      expect(getByText('Counter :1')).toBeInTheDocument();
    });
  });

  describe('Decrement', () => {
    test('decrements count when Decrement button is clicked', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      const decrementButton = screen.getByText(/Decrement/);
      expect(decrementButton).toBeInTheDocument();
      fireEvent.click(decrementButton);
      const displayElement = screen.getByText(/Counter :/);
      expect(displayElement).toBeInTheDocument();
      expect(displayElement).toHaveTextContent(/Counter :-1/i);
    });
  });

  describe('Reset', () => {
    test('resets count when Reset button is clicked', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      fireEvent.click(getByText('Increment'));
      fireEvent.click(getByText('Reset'));
      expect(getByText('Counter :0')).toBeInTheDocument();
    });
  });
});
