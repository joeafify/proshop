export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case "CATEGORY_LIST_REQUEST":
            return { loading: true, categories: [] };
        case "CATEGORY_LIST_SUCCESS":
            return { loading: false, categories: action.payload };
        case "CATEGORY_LIST_FAIL":
            return { loading: false, error: [] };
        default:
            return state;
    }
};

export const categoryDetailsReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case "CATEGORY_DETAILS_REQUEST":
            return { loading: true, ...state };
        case "CATEGORY_DETAILS_SUCCESS":
            return { loading: false, category: action.payload };
        case "CATEGORY_DETAILS_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case "CATEGORY_DELETE_REQUEST":
            return { loading: true };
        case "CATEGORY_DELETE_SUCCESS":
            return { loading: false, success: true };
        case "CATEGORY_DELETE_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
