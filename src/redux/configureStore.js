import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Books } from './books';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import { InitialFeedback } from './Form.js';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books,
            comments: Comments,
            auth: Auth,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}