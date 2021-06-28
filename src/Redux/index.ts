import {configureStore} from '@reduxjs/toolkit';
import reducer from './Stores/index';

import * as Middlewares from './Middlewares';

// export const store = createStore(
//   reducer,
//   applyMiddleware(compose(...Object.values(Middlewares))),
// );

export const store = configureStore({
  reducer,
  middleware: Object.values(Middlewares),
});

export type AppState = ReturnType<typeof reducer>;
