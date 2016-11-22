import { getCols, SELECT_TYPE, SELECT_WORK, CLOSE_WORK, TRANSFORM_LAYOUT, GET_WORKS_LIST, IMAGE_LOADED, TOGGLE_PROFILE } from '../actions';
import { combineReducers } from 'redux';

import { worksData } from './../worksData';

const pageControlInitialState={
    selectedType: 'A',
    modalOpen: false,
    selectedKey: -1,
    profileOpen: false
};

const pageControl = (state = pageControlInitialState, action) => {
    switch(action.type) {
        case SELECT_TYPE:
            console.log(state, action);
            return Object.assign({}, state, {
                selectedType: action.selectedType
            });
        case SELECT_WORK:
            return Object.assign({}, state, {
                modalOpen: true,
                selectedKey: action.work.idx
            });
        case CLOSE_WORK:
            return Object.assign({}, state, {
                modalOpen: false
            });
        case TOGGLE_PROFILE:
            return Object.assign({}, state, {
                profileOpen: !state.profileOpen
            });
        default:
            return state;
    }
};

const pageLayoutInitialState = {
    worksData: worksData.sort(),
    cols: getCols()
};

const pageLayout = (state = pageLayoutInitialState, action) => {
    switch(action.type) {
        case GET_WORKS_LIST:
            return Object.assign({}, state, {
                worksData: worksData.sort(),
            });
        case TRANSFORM_LAYOUT:
            return Object.assign({}, state, {
                cols: getCols()
            });
        default :
            return state;
    }
};

const modalControlInitialState = {
    desc: "",
    finishDate: 0,
    idx: 0,
    img: require('./../images/nara2.png'),
    name: "",
    role: "",
    startDate: 0,
    thumbImg: require('./../images/nara2.png'),
    type: "",
    url: ""
};
const modalControl = (state = modalControlInitialState, action) => {
    switch(action.type){
        case SELECT_WORK:
            return action.work;
        case IMAGE_LOADED:
            return Object.assign({}, state, {
                imageLoaded: true
            });
        default :
            return state;
    }
};

const reducerApp = combineReducers({
    pageControl,
    pageLayout,
    modalControl
});

export default reducerApp;