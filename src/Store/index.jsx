import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import storePersist from './storePersist';
import rootReducer from 'Reducers';

const logger = createLogger();
export const themeKey = 'theme.alphalearn.org';

const customMiddlewares = [thunk];
process.env.NODE_ENV === 'development' && customMiddlewares.push(logger);

const initalState = storePersist.isExist(themeKey)
    ? { darkTheme: storePersist.get(themeKey), }
    : {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initalState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddlewares)
});

store.subscribe(() => {
    const shouldSet = store.getState().darkTheme;
    if (!shouldSet) return;
    storePersist.set(themeKey, store.getState().darkTheme);
});

export default store;