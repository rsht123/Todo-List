import todoApp from "./reducers";
import { loadState, saveState } from './localStorage';
import { createStore } from 'redux';
import { store } from "./app";

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    if(!console.group) {
        return rawDispatch;
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState())
        console.groupEnd(action.type);
        return returnValue;
    }
}

const configureStore = () => {
    const persistedState = {
        todos: {
            byIds: {
                randomTask: {
                    id: 'randomTask',
                    text: 'Initialized State',
                    completed: false
                }
            },
            allIds: ["randomTask"]
        }
    }

    const store = createStore(todoApp, persistedState);

    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }
    
    store.subscribe(() => {
        saveState(store.getState());
    })

    return store;
}

export default configureStore;