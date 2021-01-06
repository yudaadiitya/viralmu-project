const comment = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_COMMENT_SUCCESS':
            return action.comment.map(item => {
                return item;
            });

        case 'LOAD_COMMENT_FAILURE':
            break;

        case 'POST_COMMENT':
            return [
                ...state,
                {
                    comment: action.comment
                }
            ];

        case 'POST_COMMENT_SUCCESS':
            return action.comment.map(item => {
                return item;
            });

        case 'POST_COMMENT_FAILURE':
            return state.map(item => {
                return item;
            });
            
        default:
            return state;
    }
}

export default comment;