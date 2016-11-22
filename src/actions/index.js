export const getCols = ()=> {
    if (window.innerWidth > 1116) {
        return 5;
    } else if (window.innerWidth > 912) {
        return 4;
    } else if (window.innerWidth > 712) {
        return 3;
    } else if (window.innerWidth > 412) {
        return 2;
    } else {
        return 1;
    }
};

export const SELECT_TYPE = 'SELECT_TYPE';
export function selectType(type) {
    return {
        type: SELECT_TYPE,
        selectedType: type
    };
}
export const SELECT_WORK = 'SELECT_WORK';
export function selectWork(work, key) {
    return {
        type: SELECT_WORK,
        selectedKey: key,
        work: work
    };
}

export const CLOSE_WORK = 'CLOSE_WORK';
export function closeWork() {
    return {
        type: CLOSE_WORK
    };
}

export const TRANSFORM_LAYOUT = 'TRANSFORM_LAYOUT';
export function transformLayout() {
    return {
        type: TRANSFORM_LAYOUT
    }
}

export const GET_WORKS_LIST = 'GET_WORKS_LIST';
export function getWorksList() {
    return {
        type: GET_WORKS_LIST
    }
}

export const IMAGE_LOADED = 'IMAGE_LOADED';
export function imageLoadingComplete() {
    return {
        type: IMAGE_LOADED
    }
}

export const TOGGLE_PROFILE = 'TOGGLE_PROFILE';
export function toggleProfile() {
    return {
        type: TOGGLE_PROFILE
    }
}
