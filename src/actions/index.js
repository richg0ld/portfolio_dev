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
export const CHANGE_THEME = 'CHANGE_THEME';

export function selectType(type) {
    return {
        type: SELECT_TYPE,
        selectedType: type
    };
}

export function changeTheme() {
    return {
        type: CHANGE_THEME
    }
}