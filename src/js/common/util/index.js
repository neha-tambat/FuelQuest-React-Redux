/**
 * Created by synerzip on 27/04/16.
 */


export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        throw response;
    }
}

export function parseJSON(response) {
    return response.json()
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action = {}) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function getScreenMode(){
    var screenWidth = window.innerWidth;
    if(screenWidth >= 1200){
        return 'large';
    }else if(screenWidth >= 996){
        return 'medium';
    }else if(screenWidth >= 768){
        return 'small';
    }else if(screenWidth >= 480){
        return 'xsmall';
    }

    return 'xsmall';
}