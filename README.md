# React-Redux

This project was made for studying purposes, the code is not really the best (I could've splitted between components and folders correctly, but tried to keep everything "compact" 😅).

## Why?

I am interested in learning the basics (and advanced) of Redux, React-Redux and Redux Saga.

## Results

When creating the counters with `useReducer ()` and Redux, I realized:

- The state management works differently between then, while Redux provides a **global state container** (like `useContext()`), `useReducer()` provides a independent local state container;
- Redux can combine reducers into a single one, while `useReducer()` can't.
- Every `useReducer()` provides their own dispatch function, dealying only with the actions that are specified by the reducer function consumed, while Redux provides a function that consumes _any_ action dedicated for _any_ reducer function.
- I haven't implemented, but Redux does have middlewares (+ side-effects libraries like Redux Saga and Redux Thunk), while `useReducer()` doesn't.

## Conclusion

Redux is almost a requirement for large and complex applications (used with `useState()` and `useReducer()` if needed), but using `useState()` for basic and smaller applications should be enough. If something more advanced is needed, you can stick to `useState()` + `useReducer()` + `useContext()`.

Feedbacks are welcome!
