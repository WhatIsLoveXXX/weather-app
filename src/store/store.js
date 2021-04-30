import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./weatherReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promise))
);

export const persistor = persistStore(store);
