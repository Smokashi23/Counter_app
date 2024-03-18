
import CounterReducer, { counterReducer, decrement, increment, reset } from "../../reducers/CounterReducer";

describe('Counter Reducer', () => {
  const initialState = { count: 0 };

  it('should return the initial state', () => {
    expect(CounterReducer(undefined, reset())).toEqual(initialState);
  });

  it('should handle increment', () => {
    const previousState = { count: 0 };
    const expectedState = { count: 1 };

    expect(CounterReducer(previousState, increment())).toEqual(expectedState);
  });

  it('should handle decrement', () => {
    const previousState = { count: 1 };
    const expectedState = { count: 0 };

    expect(CounterReducer(previousState, decrement())).toEqual(expectedState);
  });

  it('should handle reset', () => {
    const previousState = { count: 5 };
    const expectedState = { count: 0 };

    expect(CounterReducer(previousState, reset())).toEqual(expectedState);
  });

});
