// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const SET_DIFF = 'SET_DIFF';
//
// export function increment() {
//     return {
//         type: INCREMENT
//     };
// }
//
// export function decrement() {
//     return {
//         type: DECREMENT
//     };
// }
//
// export function setDiff(value) {
//     return {
//         type: SET_DIFF,
//         diff: value
//     };
// }

export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_WORK = 'SELECT_WORK';
export const CLOSE_WORK = 'CLOSE_WORK';

export function selectType(type) {
    return {
        type: SELECT_TYPE,
        selectedType: type
    };
}

export function selectWork(key) {

    return {
        type: SELECT_WORK,
        open: true,
        selectedKey: key
    };
}

export function closeWork() {

    return {
        type: CLOSE_WORK
    };
}