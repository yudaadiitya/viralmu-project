const video = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_VIDEO_SUCCESS':
            return action.video.map(item => {
                return item;
            });

        case 'LOAD_VIDEO_FAILURE':
            break;

        case 'POST_VIDEO':
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description,
                    url: action.url,
                    category: action.category
                }
            ];

        case 'POST_VIDEO_SUCCESS':
            return action.video.map(item => {
                return item;
            });

        case 'POST_VIDEO_FAILURE':
            return state.map(item => {
                return item;
            });
            
        default:
            return state;
    }
}

export default video;