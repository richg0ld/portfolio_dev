import { SELECT_TYPE, SELECT_WORK, CLOSE_WORK } from '../actions';
import { combineReducers } from 'redux';

// const counterInitialState = {
//     value: 0,
//     diff: 1
// };
//
// const counter = (state = counterInitialState, action) => {
//     switch(action.type) {
//         case INCREMENT:
//             return Object.assign({}, state, {
//                 value: state.value + state.diff
//             });
//         case DECREMENT:
//             return Object.assign({}, state, {
//                 value: state.value - state.diff
//             });
//         case SET_DIFF:
//             return Object.assign({}, state, {
//                 diff: action.diff
//             });
//         default:
//             return state;
//     }
// };
//
// const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// };
//
// const counterApp = combineReducers({
//     counter,
//     extra
// });
//
// export default counterApp;

const AppInitialState={
    selectedType: 'A',
    open: false,
    selectedKey: 0
};

const pageControl = (state = AppInitialState, action) => {
    console.log('reducers',action);
    switch(action.type) {
        case SELECT_TYPE:
            return Object.assign({}, state, {
                selectedType: action.selectedType
            });
        case SELECT_WORK:
            return Object.assign({}, state, {
                open: action.open,
                selectedKey: action.selectedKey
            });
        case CLOSE_WORK:
            return Object.assign({}, state, {
                open: false
            });
        default:
            return state;
    }
};

// const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// };

const reducerApp = combineReducers({
    pageControl,
    // extra
});

export default reducerApp;